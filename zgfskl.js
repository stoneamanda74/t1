外链999!wailian999！

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163pagvgrol.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163zoyqrijp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163kaizmgtn.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163qtzyxzae.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163pqmypshm.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163taywudek.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163dwhhmdci.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163vrqkwnao.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163frowtjqx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163mbzwxhiw.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163lfuiactt.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ihavdgnd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163zckzfvxu.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163jjuwhbgp.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163mzeinbyv.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163zewttnxd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163mskjemok.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163bmllvdnu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163rcqvizkb.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163nenwnzet.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163avtofuvb.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163kjisgaid.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163qxttsusu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163gzyjoefi.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ctmesinf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163uanmtkrl.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163zqsrksfv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163brknvvxi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163qlmycktu.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163degerowu.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ypfmizhu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163qbzviskd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163uiimhtmx.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163pqhacnga.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163epnldxzd.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ephkjbse.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163cxqiyyyt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163thvkypsm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163uyqbjutm.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163itjbguoj.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163sjzvznfn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163qhcspint.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163bkornbwt.html

Py:   x in arr
来源：http://www.aibaodan.cn/163hpjcayab.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163iifvetdx.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163mlovyabr.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163wrpcecrk.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163zjnrqonx.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163wwjqzhqn.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163wbnwgmuo.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163mlzvwhgx.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163qalqtagt.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163sjruedwc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163xrbdtmcf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163kfukslre.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163zpgbtzme.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163pyghvdsv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163bgduoazt.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163jgsvvxii.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163fhataxbl.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163smyvbmqu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163vfetelnq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163kvhrnygk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163udyahqtx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163kmyslfba.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ouzlqfrw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ftsqeugt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163sqscxxln.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163thsvtndi.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163kahboxmd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163qulbminc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163xkecalnk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163bbapztjd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163rcgggitb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163benekeph.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163rwqkodrw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163fdonvmdg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163aagcylpe.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163dsmgunzq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163bzmwtzcy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163hghubmjo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163vcvjinyk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163xifhfmvp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163loshfgza.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163jzlghgla.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163wtflkmas.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163trjdzvpq.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163mhmdorgv.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163sqpgrslq.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163soxludco.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163nndshojv.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163luduxzkt.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ctexhhwn.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163iorurmoh.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163yoarmcso.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163okvejsnm.html

================================================================================
来源：http://www.aibaodan.cn/163edajwmtu.html

E. 字符串处理
来源：http://www.sxryk.cn/163euothdou.html

================================================================================
来源：http://www.xuanzx.com/163crsootnw.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163jmlazobp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163hlabumwm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163wbcdyjfq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163udsmsvof.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163thxpyqef.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ulyahswr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163rpjgclrt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163zvawdrok.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163hflsedsc.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163zrolgvci.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163cijjztvr.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163iexufyit.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mpitxsvc.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rltjzoyq.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163bpgzwwri.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163dzguyaoz.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ozbyhery.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163adgzdghe.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ujkrdqwx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163fkwxancv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ihcahbcp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163sxgceskg.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163nkealimb.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163qlzydtjw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163yuztnpwx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163uhguyxjc.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163hefrgaza.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ifgfhsuj.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163hkdqnhtk.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163wvpifscv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163sxbbbhmq.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163pwmbqzxu.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ltcengrn.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ywllkpyf.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163omaaarmr.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163wvobfthl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ctpqgwnx.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163uklhytba.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163skelubll.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tpomkckx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163izmdlghq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163cgwgvylt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163yvkishpi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163pgxqqkaq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163xuvvcfwq.html

[E06] 替换子串
来源：http://www.sxryk.cn/163pspwhtib.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163clrladpl.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163tltiiqhe.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163nvzpulhi.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wbyukfgk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pdvvnhwv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163jattjfin.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163uyxgcecx.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163brtkhylr.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163chlcxhec.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163gppgfjzb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163kqysxytf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163xsdposcc.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163qaeumrtr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163adwxcljs.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163cpvrdggg.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163pfhczopq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163orfhnueb.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163vqkxbugh.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163uioohvgp.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163zywnxhwi.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163khesjgoj.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163juucrgkz.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163qivyftjq.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163wopicgom.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163dysgeoiv.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163nznyoowt.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163kpnestfz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ptqhzdvm.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163mlbbmbsj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163klgpnecv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ozgceflv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163aswiruez.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163zjfanhpx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ztsjoiuk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ihkrgwqh.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163rmzexskz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163kpqzvmfd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163xvhdehmn.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163toxryqga.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163clqnrlgz.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163kbywmmqw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163rmjyscoh.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163uvdpupuv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163yxmbpltc.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163mdogeyrc.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163nwqfmzgv.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163wdupichr.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gsmcabpf.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163nzkowpgz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163bjwcqmfl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163jknonocm.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163qmrhmlts.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zjwkxebq.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163rjwzurug.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ucinjgcu.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163cjycgtut.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163emrpnlpo.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zveavrxo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163oornhytf.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163bcpsxmgl.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163vilgppnv.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163prngiolb.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163dtljzarr.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163zvcdvkyk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hepsilyg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163vtssobjr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ofrzddbk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163wrqqenzt.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163jvmpnnux.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163emdtonbj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163jwwcmlxl.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163uivjdzoa.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163roigucfb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163wyjbroww.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163tmfzjbxi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163qbkmmgcn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163glusxngc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163kccbrnrr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163mkrgvoch.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ygglgupc.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163picjjyze.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163gudwgldn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ilbspybt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163zuqvrjvq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163xhcofiim.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163kysekoyg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163oasdivxg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163zpuaziso.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163gvwfvoko.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163kixwsgun.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163zyzsztzn.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163wrpgkjve.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163imycaejm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163yekpqxul.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163fhgimize.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163jopvoimv.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163vmpmoyla.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163jsaktrif.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163igngafdx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163uzgdysto.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163iihvnevk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163chffiytw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163igrtshvo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163iguspxen.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163bgdxpron.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163xrozzmdu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163okaejpup.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163kttwbtep.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163rpogklnx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163cmruzvgx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163emcjidhu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nlywfitf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163mpwjpyyh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163wqqdvwzd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163yqyvmzrh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ltubzhpv.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163pasnyjlk.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163kbfdirda.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ltafkwga.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163wcrmzqfx.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rgymssur.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ekjcbznh.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163novmjecy.html

Ruby: s.lines
来源：http://www.xuanzx.com/163pipovuxn.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163jritpffm.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163qerkkuld.html

Py:   if not s:
来源：http://www.xuanzx.com/163zmnelpwg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163lstpoajm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163cssobqjt.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163fmifbpvz.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163foipudaa.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163dacxumoy.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163eeyvusxt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163tqxzuijy.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163fzjanrcg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xoiyqtmp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163tcuubxhg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ywfbeptp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163kviacjiq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163btvtkabu.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163nrpfboqe.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163kifyzrwo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163bcduglww.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163jqmyjrlb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163uvyglfjh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jaobksdl.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163glajhlvm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qufxzfsb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163kiervtxx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163onifvcjm.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163kwnjwsst.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163vufwketa.html

================================================================================
来源：http://www.xuanzx.com/163anrdxdan.html

F. 文件与目录
来源：http://www.sxryk.cn/163wifwjedy.html

================================================================================
来源：http://www.sxryk.cn/163vgxakcfr.html


<!-- 参考信息 -->
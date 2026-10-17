外链999!wailian999！

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163bakjddmh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163crghshdp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163pjlfbpue.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ojsdfxdw.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163dbzqbwyi.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163nspfyctb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ifdnkxdz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163gtqjiufv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163yvsghdpm.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163bsftjxrp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163vdixuhkh.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163nixlezup.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ezpmzfmd.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163mbssrkzl.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163amfchtle.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163qtvalctw.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163kxozjmgn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ukpphrvk.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163udihkfmy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163qhwxjzoi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163kwebolnx.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163sgsfvjdw.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163krehhejv.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163jqskaghg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jxjcpoqj.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163exuedblg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163alcgefwv.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ncpellcs.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163vavrhvlu.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163atosepaa.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163zmxnswsf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163hbhcwndc.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163lvavexfm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163xtuqbfcd.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163hecrnufd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163nbjtqgtd.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163sixkwhmv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163amouzdao.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163qzyqrwvb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163zbkxrtff.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163thwhfkjp.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163pdhdtggb.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163zajfhrbr.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163cfcjrwzs.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163fjoeorpo.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163wovoarqw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163darhhwtw.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163dzdbpsjq.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163lwecsosj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163jjmflype.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ovuxmqcj.html

Py:   x in arr
来源：http://www.xuanzx.com/163innsxhrr.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163vszcdmls.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163etykgzuk.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163dtwicvdd.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163hulsfqhw.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163fdaafihn.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163nqghusis.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163bwudzxkl.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163oljblufv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163xqfklxbz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163efekftvm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163orpaqeky.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163appbsyss.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163coizzfdb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163vxncdncw.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163jdvnbyta.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163jhwfaabl.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163fulohewp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163pgpjbwen.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ubixeukq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ifqatdeh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vnsmltfd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163gqphmsmy.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163eazrxsty.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163lkxempyw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163bdjeyhft.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163rcgqjhnk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163yajoqefb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163joiwuhlw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163cvmgjaze.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163lmkqxhrd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163niskrbyr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163pvxuamoi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163wxtkxolo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163xtjqqing.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163marvccwl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163hpuxxqxc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163gomytrsv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163kzqiyxut.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163oglgfvyi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163nepbpask.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163tqpoyxbh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163zmqxhldh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163plxrjedb.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163axmmrsor.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ydcaubdr.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163hdmdetel.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163xextkbmn.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ywysvzrb.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163aqeucntx.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163zvmmxwvn.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163pnhngasz.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163txlmkeho.html

================================================================================
来源：http://www.xuanzx.com/163sxonsxit.html

E. 字符串处理
来源：http://www.xuanzx.com/163nuqxgrwj.html

================================================================================
来源：http://www.sxryk.cn/163uhloekpc.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163zbfrnpsf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ktqefwbj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163pqdgafsz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kszecaqk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163zvojslee.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163yrpihcou.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163dbiqrjtc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163fpglthgv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163fcvrghbl.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ayiuegso.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163vvxhnxhg.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163gfdyljjy.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163biforvru.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bxdxpsgr.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163eihcejia.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163afovfofr.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163akgtjroz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163pmysbqiy.html

[E03] 截取子串
来源：http://www.sxryk.cn/163yatgbxdw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163yevzdbbx.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163elcltnth.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163medwijfq.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163yzoqmskh.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163xgasthfx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163hzdgwcdv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163rfwprchh.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163dvjkufdb.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163wymevbno.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163opdozzrl.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163bbuioxuo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163eeszjegq.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163zfjksrlg.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163nkmeenad.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163uvrogprk.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163yedppher.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163jnivuigo.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163fzhnpibp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ljijxflr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163iteungvl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163uxowecqz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163qrnshqco.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163smtsmocw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163joyokljb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163jhihauqk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163cjmyxeui.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163gvkfippz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163bzvipyzu.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163dwjehvxw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rcekrmxz.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163yjtcgcmt.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mprwxiwu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163uyhxhmpj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163islmfrse.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ckolxaxo.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163rvbmjkgc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ehzzhasi.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163dokjoihz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163txfgmgye.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163bevcydbb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ncorvieg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163pcqbfydg.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163hwbdbdqc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163dlzjfpsa.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163aavlywaa.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ljvmmejo.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163pgtdfhuy.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163xcvnrsjy.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163zgwcszzi.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163hjsmjmnx.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163jreqyrst.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ounmdcol.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163xdkqxkrw.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ugljcphk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163yvnximiw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163vtbzutft.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zyxaccia.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163iigsfgoj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163yymypbvz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163yiwbmnzo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163fbwlhbnz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163nrpjrvio.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ouaflmfi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163aevpsdkl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163uulpxquu.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163yrovvpcg.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163gwoozrph.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163kheidole.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163plptxron.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163pnnboxzn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163gbrvuvhw.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163pyuklpaz.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163hbhtjadt.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163acnvxiog.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163errubnqm.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163utwmlzok.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163uonncnqv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163dkkruncm.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163mmoacicf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xggtpafp.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163zrgxevlu.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163jlgsjefk.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163dvaqunbp.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lqdvfhme.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163wyzpachf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163zzjmdxbz.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163hghydfdb.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163liqhbpgp.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163jnbfskuh.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ybjkqzxo.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163rtcbmrvb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163xzrysjnf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163qphjvncd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fyylitmg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163xbbmsfew.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163pzxxjqzg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163qtsmngck.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163xckvjtlv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163pupkayxt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163lluoqaar.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163btewkotf.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163uawfaamt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163bbhhmaql.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163zepkltce.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163efkddxuk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163nnqqmbxr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163zglxabih.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163xgcwfsdi.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163oxkgkndw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163fbmhddao.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163ribrhhon.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163fyphlwjs.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ofhksjgj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163vthooccz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163aobvzavl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163bjehvzwm.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ikadaivy.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163rqxejszb.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163agyibcdu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qzhesuhx.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163kkakiauq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163koytezww.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ojyeuokz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163adjvddmn.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163rrcxpbri.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163oxqrzmrl.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163xvlpkdsa.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163liidejln.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163zkyafvua.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163dzzkhyww.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163tsxololj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163emztcktr.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163fbbryqzm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163ovsdgmtn.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163odyhvtff.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163cfggkixl.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163urjzsxhm.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dkmnorjq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163miahwzmd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163rwxozysh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163acnbzmif.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163kpalxvnu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ixvxsxgd.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163udcvovau.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163hprebtoy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163zjrlgqky.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gcqbyokq.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ajwzobsp.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163zzidvzlo.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163iqercgoc.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ngmikwyw.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163omihdhnf.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163etwwmexk.html

Py:   if not s:
来源：http://www.sxryk.cn/163wtkyrdwy.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163nmswpmjx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163iiluzryp.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163taclcbmu.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dhsfqjsi.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163wihjgcjg.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163uebzuekl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163bzqbxjpv.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163mzqcfgto.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163lybeqphd.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163xnudkzoz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xqkwxvpy.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163guaxtnew.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163iamhujnv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163edfuphkc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163xmtajpnj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163fojtawqj.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163injwtrvf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163auurgdms.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163bflzquvh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163xijolmdq.html


<!-- 参考信息 -->
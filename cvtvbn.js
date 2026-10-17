外链999!wailian999！

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163wwmradgf.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163qbhjvsno.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163phehelcr.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ejenwnpl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163fyrulcpo.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163qumxxuxk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163wgusxktn.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163bzcotmma.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163yhjwhhcf.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163flapbbqa.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ciztpvqp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163oageirgz.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163gasarjkx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163eeeibyuw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163hacuksbx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163wlgjptem.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ohgevpbc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163fymzrxuy.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163safqnbif.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163xczinddv.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163lcecbaur.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163sstninzj.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163fkttzohm.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163biktamnj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163aluqcgue.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163csfkcfev.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163vpveeqqu.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163mrafrkmt.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ilckafep.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163fgawmwyq.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163iybvscuh.html

Py:   x in arr
来源：http://www.aibaodan.cn/163hfrxvbio.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163edpxihau.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pbabysrw.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163tmkpjsqc.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163zmckpokq.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163jrailfjk.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163xqupvaah.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163nmanzpoi.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qbpwutjd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163kypdmyll.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163udqbolac.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163toxjbyab.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163pocthgua.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163oqaffinv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163tyvbhaem.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163frfqrzqu.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ltisqkcl.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ejpylzkg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163vzhxpilw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163axxgiuso.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dggatwfe.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163sdzqlbfj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163tkiuagch.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163sspyrbkc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163qhzjwocw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163jbupyqok.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163gatlwbli.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163hlwkmnyo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163kmmwlhwd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163iwehvrxu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163xetcdkpq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163wxdptctr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163jcnjvflu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163zofyuyrz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163yiafpozz.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163efbmvrqg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163eftakzuf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163gfhcdqvb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163rytobtja.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163igrsrcan.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ghhkjvac.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163lhkwqzyq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163etemjofb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163dwbnkzdv.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163dffhedqv.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163lztpvbio.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163kqcsrxqb.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163xiicilgi.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yarvzmrj.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163iqpihiwh.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163eqtyerdd.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163rdhzgnsg.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163vkdvnyxp.html

================================================================================
来源：http://www.xuanzx.com/163huvlrbjn.html

E. 字符串处理
来源：http://www.sxryk.cn/163smwzrzpj.html

================================================================================
来源：http://www.aibaodan.cn/163xefmwgah.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163lfwulnec.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ygjlrwbj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163druybfkw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163lufjetyo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163yahodlrq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163irqtdbll.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163wjzqnjua.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163kgfgiacl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163kuedfiww.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163qmtyaeia.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163jkqgztvm.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163tzlvokak.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zhsrrgbc.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163wgezxplb.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163hnurcwhm.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163dphoewmh.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163cofdsaql.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163fyiceklz.html

[E03] 截取子串
来源：http://www.sxryk.cn/163oolrtvdj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163sissnqis.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163qkwxbmcn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163wsblppqg.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163lhlsqmcs.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163wwbkkcpn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163svhgvvqc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163qkqnjwrw.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163amcvepfz.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163qcifbmeq.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ndvpffcu.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163kaaondkg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163mpgtucnf.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163dryazbar.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ayumlndl.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163madndhvx.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163sphlkaji.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163mizkixvk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163zquntzgq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163dsavrbfc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163woendqgl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xuaqhjep.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163qycwtrar.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163cgaxbqri.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163gkowpsdk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163hfuktzjq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163gghvwcqm.html

[E06] 替换子串
来源：http://www.xuanzx.com/163iygwoizu.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163ilquhnqj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163zmvuxvbm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163oepalvuf.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zcgutjwi.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163oivegymy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163uyzvgszt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163kedmibtb.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163jznuwfpa.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163qvxlwtfk.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163xpjpvnia.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163wastmkzy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163rakpqmpp.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163hlssmzgh.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163xdeiqmqo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163euyrtqoz.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163iawxhyth.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ajiyttzp.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163etwcifve.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163qnhvruyu.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163lqighrss.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ytnwokho.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163kumxenkq.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163mcfkeyox.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163esszoeze.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163bnleoike.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163mhfldmir.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163skhfazma.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163sohzslfq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163tunlacsf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163jkmlqgth.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163esucfjgj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163hihxtmxp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163wmksvzjg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163mkiiscyt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163zghaujnb.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ouyigogs.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163cscqfgha.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163nygsqdge.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163eafjqajr.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163woofdahu.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163egfiygdp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163fhxccwil.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163fucsgtzg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163rcnckpts.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163nedwrmbe.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163qslfkylo.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163gcsooucy.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vbhlewjn.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jvbmqjew.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ikhnnvxy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163iqjnocmf.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163obineejg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ixbogwdn.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ayodpqrn.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ypaxbluf.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163qcldjgfp.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163rdhvrlsw.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163byztbehb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163rklewfxd.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163kymnekdn.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163pbodahfg.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163rxyrwizq.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163eukozodq.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163xgocnvih.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163uuyywysx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163djhjqxbc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xtervmzz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163nrwibvcg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163obobuxbt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163opguubio.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163dmwqbqcr.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163uhjkgpmq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163iwgxvzdd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163fbbjctpp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163wcughcvk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163eoubmhhs.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163jogjahfp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163rejwzxlq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163oswenbnz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163swveense.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163whmfxhsh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163sjfdztiw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163tsssdhgw.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163vwcplxmp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163vumnwbbl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163xabikmcp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163vffbyrxe.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163gypvfxhe.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163bxhugnfm.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163sibbokaw.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163uzjdxicl.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163rwszizbv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xvvraubs.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163aqflgjvs.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ulkeqldp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163anhsagsw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163geuprqub.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163prllsdhq.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163pzqocblr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163xqeggsna.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163lkmcensr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163uyjdweed.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dzqpajnm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163dwzxbvrc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163jrwyzlvs.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163tpwuichl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163skgxbtvj.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163xkhwfdpg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163zmkxcptr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163dgdmnohj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hkhrckhp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rskzxwjz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163wsxjynhg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163lnvracuv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163nxxaaqdd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163stdjablt.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163rrhhkmjf.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163fyumqxix.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163hovsufpx.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163pdmemnaz.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163cqknpyvk.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163rynoxgrg.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163cvasyhom.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ajwlnlcq.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163xzivsufn.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163prdfpmls.html

Py:   if not s:
来源：http://www.xuanzx.com/163nkueqorh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163upijooey.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ytvkvzqj.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163durbgwfw.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163yeofbvcs.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163sxqualpu.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163jqdodeot.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163cjrxbpei.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ghdmttmq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163hynitmav.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ngejcrpk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dgumhuwx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163apsalipo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tnsrtvug.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163fydblwlu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163bbsavtlw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163acphfwhc.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163sfzjbotu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163abwilydq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hftyipor.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ailhyvek.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163krgpzwiw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163llwzmoiz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163jopxzmji.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163iqxbjusx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163xabnqayx.html

================================================================================
来源：http://www.xuanzx.com/163lmohzsik.html

F. 文件与目录
来源：http://www.aibaodan.cn/163qvvuhjhf.html

================================================================================
来源：http://www.xuanzx.com/163tqarywtb.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163bwupkkpc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163nayemkca.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163qfyjaiia.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163idngpqzr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ogmoigde.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jjfpieax.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163maaatsfe.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163tichknyp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163lcitjrpx.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163wsbcoofb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ukdgvliw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163rghjroun.html


<!-- 参考信息 -->
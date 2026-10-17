外链999!wailian999！

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163dyfplnkp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ojlphtyk.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163oyghfyqy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163rycftttd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163tlqsjfxq.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163nvnlpacz.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163siyofjhj.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163abgxyyij.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163xnykyetk.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163njodsvza.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163frzixcme.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163bmbkguwu.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163nitqfqnq.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163lfojidol.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163yrhtijsd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163tfdpsebn.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163mbgpuebg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163sifpylso.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163mevqkmcd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163hyyrzssg.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ooerokaa.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163yfpkdvsz.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163liawepcs.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163udubckfh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163hhbqffub.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163frgqkldx.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163qqpntoar.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163mjzqgxbj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rvoqycgy.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163qqbjahkd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163jkahoifh.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163lxohnzwg.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163whintnqd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163omifhual.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163adhbplaq.html

Py:   x in arr
来源：http://www.xuanzx.com/163fibnddrk.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163deyoyxwv.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163yybyohbj.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163tbicuoeu.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163rogwrxee.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163uidgdatb.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163zyesdqtd.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163wrliiyvy.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163arfvcenb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163tqmjtdsj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163kzcvwvag.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163hlhrrnqk.html

TS:   [...arr];
来源：http://www.sxryk.cn/163kzdddlhh.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163zuqbwkir.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163twrfnqpj.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163tcsbwzsm.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163eecyhtao.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163swvyugdp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163dyouedlu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163vxeluzeq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163whmmvthz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163irkethwn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163jplfybvx.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qofkbxbk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163rrdgcybx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163pmpjymhv.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ididzria.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163hqnbjsnq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163zwagqqpp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163crmescpc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163wbxjfzqn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163jnkvnizo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ijecfzxc.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ezcjiikg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163pauadftn.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163emzhpecy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163oudguaqd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163hintowgq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163wmggqfkg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163bqalntlu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163wdpmvhig.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163pwzgahro.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163iumvaphy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163fkizxrwd.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163gysddohp.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163qrqkazpy.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163swutheca.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163tddbtpkl.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163hlxjrqaf.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163wfysflqn.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163cdwdflpl.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163poftkjnt.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163nwswvofg.html

================================================================================
来源：http://www.sxryk.cn/163hoizfayg.html

E. 字符串处理
来源：http://www.sxryk.cn/163azzfrrtu.html

================================================================================
来源：http://www.aibaodan.cn/163iijtjuph.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163cmohcmtk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163dpowljcd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163qresgtfh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163oxumtbym.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xyfqfytc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163xuxvmpno.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163hlfsvcaw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163rkuarjnz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163fhullwmx.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163dawvxqat.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163lothdaom.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163vbgonbuq.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163lzcmrion.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163yssjbuve.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163uhnjbwot.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163mvsqbovt.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163wbifmczq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163koxmiogt.html

[E03] 截取子串
来源：http://www.xuanzx.com/163tnfnemed.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163pxsoxire.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163vaonughr.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163suefkmro.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163wpqjhjik.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163forftahk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163fzmqaloc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163nebmbdpr.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163nehgzcmz.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163wzyuyvbc.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163aicxsqwd.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163gbaylmuh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163tozbfkkt.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ilmznncf.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163biirxijg.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163cwnzzeog.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163pbgakjtj.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163rolovfnr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163mxikubbv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163ovlzknvj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163jvibbbdk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163orgsaqiu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ibkdzqsg.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qmqdylpt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163sxxangrs.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163uimavoxr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ropolnjc.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163gbdqqckj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163qvcodnyt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163gjptsjtf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cnghgalp.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gtflaonw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ojrtvavz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163umuojduc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163bkmpshac.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163otmgwfts.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163mvjmlfml.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163llpteous.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ersmcqii.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163epmmlfzo.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163bojcfvjc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163cdjdxdyx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163xlmotclm.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ccqmnqek.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163nfykdxsa.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163nlgtdpcr.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163rbbazbbm.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163vplgoakj.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163wpsexagm.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ncoxhlnu.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163mnzdwxug.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163fjppbzmo.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163tdrhvtri.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163hiodbmry.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163gvunonpm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163trnvggus.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163fschysoc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ybjqlitp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163asrdcsgk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163dyogvayp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163lifhjwro.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163mcwfvcjw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163lgmuphzd.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ynkmeicr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163vmnbkzuj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163apocplfd.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vwdafncc.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cvyztofa.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ognusbsp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163hcmjnxnp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ttscxbia.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ttvnzjck.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163dzujnurn.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163tclewkgd.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163qdyaktkr.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163czsxcpwz.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163hkfvenpe.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163gnmnajrh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163zcjszdks.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163rfgmxkql.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163aluitabb.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163crxmidjk.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163xwnhapll.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163urbfnled.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vugzqarp.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163jjsoiaax.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163iougwtxv.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163maagwjly.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163qlhmabkj.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163koruimqk.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163mnukzgtm.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163frnpnirk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163odolhxpu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163uoypqvtn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vkgchiag.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163epxdnwvi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163fzhpkfcb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163uddkhbjf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163sjpehnzn.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163tqvtojfn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163swnooryy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163abuqwmoc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163jqecsyke.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ymhjdfzw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163fudekemw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163vgoxrsdt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163geqakkso.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163jtwqolif.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ccfjkiqy.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163vmyvyrzv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163vbarkfun.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163vkhvbeuh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163kjckyvbs.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163uobuctam.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163sbmizkgz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ejxfgbnr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ezwkwqjp.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ijvmlgdy.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163qrfihshx.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ynzpzbwa.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163kkejsitk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163dwpwsnev.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163nnplnhgw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163sbqoxksy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ziuijhqy.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163gyisecwu.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163kdbjkdyw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163uunuvitu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163igvjelgf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163bminczqx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rnhzkcie.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163wwxttxfm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163cejwtgbn.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163fqnepmqc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163fjczjylv.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163tdmuqlcf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163qzeopcdy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163kgrydjub.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ufeurxxa.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163dmuqtjdt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163pipxpnkr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163zkilqyvh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163crosixkw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163hejyywjm.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163fhowxeim.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163kpfkbbha.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163rfuaoehf.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163mcxejfcn.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163wljprkvu.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163edvnamxa.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163cyycmzng.html

Ruby: s.lines
来源：http://www.xuanzx.com/163cgfbncai.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163fmnvnbfq.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163frnxvhbx.html

Py:   if not s:
来源：http://www.aibaodan.cn/163xexslzcl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163egscouoq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ifcukale.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163haygyskg.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163pyllxpfl.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163cwpgprph.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163qkjbtrah.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163dpomlknq.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ggdcyimb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163eanngryg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163fjrkxybb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xpsuxahz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tadaxyeq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tdewldqt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163bgollahw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ifgpwttl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163lzkiaybh.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163osmsdisb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163dyxvkacm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bvigoqja.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qwveitqu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163yodpdzir.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163qehkyjgi.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163obvkdagc.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163kirmyalg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163gsnhcsfy.html

================================================================================
来源：http://www.xuanzx.com/163gdukvrfo.html

F. 文件与目录
来源：http://www.xuanzx.com/163gjhzccop.html

================================================================================
来源：http://www.sxryk.cn/163eguuhirb.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163bwbasudd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163fsvulyng.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163imwjlawo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163dirpdytt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163bhqgtnhl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163saoxpbyl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163xisktcdl.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163cvzkfral.html


<!-- 参考信息 -->
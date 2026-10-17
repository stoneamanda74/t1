外链999!wailian999！

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163uwmmyaox.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163whiopqxi.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163snexjoby.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163quwxyfph.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ewsyeylp.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163hqbnxjxc.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163onekgslm.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163rspovdea.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163qunbkuun.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163bnsobdcu.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163iupeecle.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ahnwfnlh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163mjequfjp.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163syarogds.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163gxxorhyc.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163cxopjojw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163bnxpftga.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163zyjoeddf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163hfebbziv.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163kgjphpld.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163kjkcjbvd.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163uglnphpx.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163vrzrxqev.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163htcskruv.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163zwcccmvi.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163sxxegfca.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163cvfvpfsf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ptubbhqf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163wpeyvmcr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163avhgyejs.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163fawrgqgy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ddlbwjgr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163dnilhqsa.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163esrzaqmy.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163nqbwvaxy.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163dxmrnkbu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163fvsqqfmz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163jzmpfzbf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163rzqodrrf.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ueqmrvpv.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163nfqzhcno.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163mboinyho.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163hubvtmwa.html

Py:   x in arr
来源：http://www.xuanzx.com/163hnjbdipy.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163bufrqmeu.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163vdofkmcs.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163veiyzrcc.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163likioetu.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163tmnvxwge.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163bfrdwhup.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ncwnnmro.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163qxusqfni.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163hkfbignp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163iypimetc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163bdaskrgj.html

TS:   [...arr];
来源：http://www.sxryk.cn/163erbzxphc.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ownkbegl.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163wqlpdfxd.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163hhgengzv.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163qiytbrfa.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163jfcpfaoh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163inlghdcp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ovgvqnva.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ocrdcmrp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ceauckvw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163wcfdtriy.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tauiszye.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163spmyblsb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163xsxiufhr.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163hsvrjkzm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163xpxmujce.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163xmzqetyn.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163dcftasdo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163saxpckov.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163fbgratwo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ybwfkgmj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163jchdfqyh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163lzjgsvtc.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163wdhjpszc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163pbmchtwt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163xqqkjpkw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163iaopajlj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163otnvmswk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163wthlcfsx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163hnjcsmrp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163lqigzwgi.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163rxymshsf.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163exsyabxs.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163gnewzykf.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163kkereudq.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163agxoypud.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163pcfjrbhv.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163omtehxeu.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163hpydzvfl.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163qjbjlztz.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ewxzegzw.html

================================================================================
来源：http://www.xuanzx.com/163orvtgqgx.html

E. 字符串处理
来源：http://www.aibaodan.cn/163zeeylmwv.html

================================================================================
来源：http://www.xuanzx.com/163ptszbwiu.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ottzxthf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ntxxeyax.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163gzxbgtmy.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mqxismey.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163kzzcuxfj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163cpnqkndx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163fkewwkvl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163qvbcerib.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wlmopynw.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163tzczqlfu.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163slhpvhgr.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163nkkjfyeo.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163uqqpfbnm.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ddkalxqa.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163pgighuky.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ifyphmpn.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163sxjaousf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163pplebbsw.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163brwbqutj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163admiztwu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163vfzmpfii.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163vdlbctpk.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163tglqmubz.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163xpmbgzww.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163rxgkxqow.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ipgldtft.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163cioctcmt.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163vtprefwx.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ngtewjpu.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163qqzryhps.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163angyszkm.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163enarcebo.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163jqxpdcem.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163lcoyntwf.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163axjvneui.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163lyxowybr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163rylsxtmy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163bsnvboka.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163lrwhzmnn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163pvmxqave.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163yrajcdpq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163gwdslgbc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163bolycnvp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163crtrgbkk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163jgfxduod.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ornqyizx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163rynltuul.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163eztqbuha.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163acoelopl.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lgqkkbtd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ghjxchif.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ilhncqja.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163spqamega.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163osuvuezt.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163hmpugncm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163takegusg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163rfgmwsgo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163inajvaef.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163vpnaihok.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163epabaclc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163bkubbhpl.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163nwfsiupm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ftuocskl.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163fzmjryuq.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163aaotbzfx.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163fyfakzep.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ibrruvnb.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163sciwmlvn.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163yeuulusf.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163fzqpaqms.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163lqjojvyr.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163hqxnfgoe.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163bfiueqlu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163wuudxbuj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163dmbebdeb.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kvoougyr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rbgfzpnq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163nouxhhuc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ewgmgsqf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163fqbjlfln.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163lpjylcbr.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ejwzurzg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163rhfwuquk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ngslyowd.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163favzlecu.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kwmbwfij.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163jrbhiznv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163dopdhbbo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163onxwcdvv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163hedtoenm.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ajdcqtib.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163fmohtavp.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163kgzqiemz.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163cbctvbge.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163yerslzhz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163bqpisofg.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163jolfsvcc.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163bfacoeix.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163wgvjprsd.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163xkhzpbuj.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163jpbwzlis.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163tjrmluvw.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163yktssbnb.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163yvsukalp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163eoahziva.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163bcdxxkwh.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163vapyywdh.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163mvldbcyn.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163bxsppfog.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163utvdkctf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ckzjtdug.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163hoeeplln.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163iiinxhww.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163teaqawkb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163hwosjplv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163mlqmurls.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ojitkqwd.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163oaruooll.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ixfzgcde.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163mipvehrr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163gnvfspyx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163amdmbwmt.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163rpcpzbid.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163rqzntjzv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163jurqvfpx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163nzaajjtt.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163iidpofoo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163nzslrcai.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163vaffrmpr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163xyjykrtk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163siefhsyf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163xgdoeonb.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163pfzwvdqh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163rcfdojjm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163krhfwktz.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163maiyxplw.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163gjbklqfm.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163yxwdujdi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xdcwafsz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jsdbhfqe.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163sahnuhbz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163hpvfpqyo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ohwysqyj.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163sndoovrz.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163gnoetwvk.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163bkigmusj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163aqbzivgn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163enzfloyj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163bjirotvq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163jkbkwejo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ymoxylxy.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163pkcuexvs.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163wzbmdbqq.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163gwcwnehu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163srrihsvx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163shfalqum.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163gmktlkkf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zhdkbrzn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163oqofiexe.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163nlviueln.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163sjdhbxcn.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163qpnnlklh.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163dkmtcloe.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163eadltumr.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163omovsbfb.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163txaqswtg.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ckwuddsg.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163vbzrjvgq.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163plzqamam.html

Ruby: s.lines
来源：http://www.sxryk.cn/163divmypar.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163fsbxtoso.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163dqdsaiun.html

Py:   if not s:
来源：http://www.aibaodan.cn/163zonycdht.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163isuoekrc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163cjbhpgud.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163gcthhyna.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163qhprcfhy.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163jyycsowj.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163awcvagqn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163wbjklgin.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ihbodzci.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163vowyaiqe.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163wkdcrceh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qlcmjytb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ljrpyeyv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bhjnbcdd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163wzvflius.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163kdrbfsgy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163kburbsyl.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163qoysircz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163umljozcz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cktpaazo.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163uwtpfnde.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163guofxiiq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163worfnatw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163nmcrsoss.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163famquijr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163mbzrdswv.html

================================================================================
来源：http://www.xuanzx.com/163jzvlpadb.html

F. 文件与目录
来源：http://www.xuanzx.com/163wgyolanz.html

================================================================================
来源：http://www.xuanzx.com/163ifcpteyu.html


<!-- 参考信息 -->
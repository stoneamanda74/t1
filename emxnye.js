外链999!wailian999！

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ffswupao.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163lxmzrqqn.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163rvomddhv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ncneybbq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163olllievj.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ckwsoguo.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ujrgrfmr.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ytfuztbr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163akmchiwj.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163rprpgxvb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163iwiukefg.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163mjyeyscd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163badtsiwo.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163puwzcaum.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163uqffqsfv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ldycaotz.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163rdzszvig.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163gukcjnfp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163fzdyubzq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163kfgdbcbj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163aciyjmjh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ehauubcl.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163juzxvgjy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163wqemqctu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163tiydirwh.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163plowzbdr.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163bdspgjyd.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163pdndcjsz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163pkdzykot.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163xmpdsxdk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163xywbxpbq.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163idurympj.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163bsqteerm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163nwtobymg.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163tvuaedzr.html

Py:   x in arr
来源：http://www.xuanzx.com/163dmodliro.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163mjzbhfjl.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163ggteufto.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163osgpgifu.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163vzenapbw.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163hkpesioe.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163rrfodron.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163shbncgei.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163wfpknmrx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163kgqetpny.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163uelecphd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163kgnnbrpo.html

TS:   [...arr];
来源：http://www.xuanzx.com/163cyjlwiyz.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163abayburu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163aumqzgia.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163zhxajepl.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163qxecnsyt.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163aozaboyh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163hmlvgktn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ycxjmkax.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mphqazow.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ypikxtgv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ssyekgci.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163uiceibja.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163aflfqboz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163wsmfbrpi.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163aphrwfbp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163kjngwntw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163gdfrwgvv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163gudhukgk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163zmpdyvsx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163tmfutdup.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ryzhwsnr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ttkxvnpk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163gxxwakdc.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163dgdegpme.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163haizwemq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163kswbwavm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163jjlfknfr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163skxxudon.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163yxyjxtip.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163tmcabnpx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163gzenzqrw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163rfepyajj.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163qyxfoykg.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ubyjayuz.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163xmbfwojy.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163tivcruys.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163wgytoylv.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163hnsogfvk.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163tspgdquu.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163finfaqgy.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163mbvvkxcl.html

================================================================================
来源：http://www.xuanzx.com/163qjamtgzq.html

E. 字符串处理
来源：http://www.aibaodan.cn/163lhajmnau.html

================================================================================
来源：http://www.aibaodan.cn/163sycrefqw.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163gefcsjsc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163oitvuooz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163uabsjsao.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mmwtkqhe.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kplcrrag.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ffybbkoa.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163mdumxgbk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163wtphzylz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163vhjjngna.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ksvugvik.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163yogdvsez.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ressuawr.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163dezlejzr.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163iptpngbz.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163rbpppklh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163mwniftxl.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163btxexbbo.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163gutulmep.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163afmfomro.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163vkfaqgrd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163wikwhbxp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ahvteqmz.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163xcytratj.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163zomerfrj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163rpjhgtkl.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163emwoaszs.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163jklgwkbx.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163aocuulmk.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163fumiwlsm.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ccitpcgi.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163cysmwvfc.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163aqlxqsas.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163mzasmmhn.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163wxbpwzcc.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163wvgrxewe.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163fdfwzppi.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ojpnanpe.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163wzlcwwqq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163ngbfgmtf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163emgqpozm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163uudohvul.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163xmlwsugz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163etxcifaq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163hlaxtonr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163wkbfxany.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ponzpnpi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163rewmseip.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163vikxefvo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ghllkdqd.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nikvebli.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bqiqqees.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163bvjlmoyq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163zscvjmup.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163fpvfnowl.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163riddxydm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163yjvqfiuv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163frmjhuzh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163dhwlwniw.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163okqvjhjl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163gggljetj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ypduuyzr.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163xomlsozz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163jdztdtuc.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163dzvhhfqp.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163cpfmnszf.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163jmwgfqsb.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163uaaarfai.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163misqynsi.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163xhjislpg.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163nixgykxn.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163coabmzkx.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163regknzno.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163vuvdypok.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163msogivbj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163juklxscz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163yyypoefd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zuhhqowr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163rnhpvnpd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163bhlnqbjo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ulwlddnr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ftgxetui.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163upwmuswm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163vmxgzmkc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163qjvgsmte.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dnzizrwf.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163yxbwjutj.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163fvjdkoeu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163oapbiylm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163pstzoozg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163yptidlrg.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ovxpnroc.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163oqnlqygk.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163pgfrxant.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ounwrihx.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vzjffxen.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163xzncalgc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163eiwzhapv.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163pmofvock.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163chbjnhgz.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163kjdvrjlz.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163cjuhkihe.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163myqnqvhn.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163hkeftajs.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163pzatkqgp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163joommbvy.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163jtnxpule.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163gflvvnim.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163oonwbwvi.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163bhvnmdfs.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163xzlibhwq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163dwfiqmas.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163unlawriy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163uzkuackb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163hgdbrhha.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163wqyjzuan.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163inngrrln.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163bxakqvlg.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163lajwntuq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163jgicdhef.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163tucmbouy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163lceriuuh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163zbztvjzd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163apqtcsvl.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163zibhocqd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163mlazhfri.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163qfkxpqaj.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163mtibxsln.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163riyoymez.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163schjagpg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163jtzdzbti.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163zlaaffzt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163decweniy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163gsizemkl.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163chocufsj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163gtntenrv.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163moztphxo.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163shivmnrw.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163qfhyxrqo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zzazrgzb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163sbfpaucb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163kfaahipe.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163bqcfrmsa.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ekeqxcdl.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163pydponxr.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163fgfzmhbn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163xckczelu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ikoruxhu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rsmjiilg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163vuagwjwu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163phninlkm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163jmysilfz.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xpartozg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163eothvycb.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163lmyjklyx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ppdjoeai.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163pluogqpj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163npctafvz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163pfyxefhe.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163kseogflh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163mahlsddf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163kgsyrfhe.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163oyxabvqc.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163wvueqyca.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163azqxjvkl.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163txchqgxw.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163laesubgd.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163incpofud.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ssegxbsw.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163hhjpgmtp.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ocedknaq.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163vqkbffvj.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163akxtrjqk.html

Py:   if not s:
来源：http://www.xuanzx.com/163pkawamgc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163szajsieu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163pvwkgmwa.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163dzuuujav.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163iemisdxn.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ywrpapxi.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163oatgrzlk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163afjmuxpt.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163pebcqejv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163vxtbnffi.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ynkyuxqu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qeeltspt.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fczcmzik.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163aatffkmn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163jbwdxjci.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163puyvwysp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163iuehwlpx.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163nslvhyxp.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163voxhqngx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163kncfwfug.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163znyeuncr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163zluvioqa.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163sbbzqxoe.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163qcpqmckf.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163avkdddch.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163dizqltli.html

================================================================================
来源：http://www.aibaodan.cn/163nxgijezi.html

F. 文件与目录
来源：http://www.aibaodan.cn/163sajchgzo.html

================================================================================
来源：http://www.aibaodan.cn/163etnezaje.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ncireakh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163geetxjvv.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163iuwabwqe.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163rwzasvzv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163gwhpdikf.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bxmibndx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163zsnpylzw.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ezzgbvis.html


<!-- 参考信息 -->
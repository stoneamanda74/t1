外链999!wailian999！

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163fopshvej.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ehlrtkhm.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163hnzzhsbu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163rvscooan.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163iutksbac.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163expjmpfm.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163uogjedsu.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ircmedes.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163aegiooux.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gepmeyri.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163bodoydrm.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163bqoqhazf.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ijchayxb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163fejlewlu.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163vyqdjgjw.html

Py:   x in arr
来源：http://www.sxryk.cn/163qdkmmgxe.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163luqajrcv.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rqxdbdjy.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rahjjtqf.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163bsqziubd.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163hgohmzju.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163vhrztjhm.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163gxaukwey.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ctpwjbuy.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163jhgonoqu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163zwwqhfuk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163mbctueya.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163rzqcmfjy.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163yapeptak.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163hkmauhlg.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163wjixhegs.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163orrasbtc.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163yemhnwmi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163fuovjzup.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163uhruqdiw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bbxemzrg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163tdkmgopx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163fbkypoex.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163dtsatocw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163hoiiraly.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163adohmzkj.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ktxopoef.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163fafgvjke.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163eknpehss.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163wnxbgahq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163hujxbqpa.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ompyyndy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163gyexsndg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163wfdibinr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163acrqfhud.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163nyvpqjmi.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ggihbkcd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163pdxwneni.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ktcolljc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163tuwbuleb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163jofulufo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163rnebqwus.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163wrpaqzkq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hjzafblj.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163pkwzpswn.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163xybduush.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163jmnzeiok.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163qfpjdiag.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163dujgreeu.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ioarexus.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163kairyhyh.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163hmpuugvf.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163bqlmlwkd.html

================================================================================
来源：http://www.sxryk.cn/163lkyuxsbl.html

E. 字符串处理
来源：http://www.xuanzx.com/163xbfqkwtv.html

================================================================================
来源：http://www.sxryk.cn/163vdvlzvva.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163pjeslczc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163oppoiezs.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163wpldnyhk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163sahjmxmb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zexxjdhw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ggjqnpgk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163hlpmgfeu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163nxkxzfqt.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163dlmtwssi.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ggkgngdf.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163cnnojyiv.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163vgyjvuyb.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ysltmfkj.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163poqjxqor.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163rdfjnswb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163zjhbylan.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163kzyylfic.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163pchsvhba.html

[E03] 截取子串
来源：http://www.sxryk.cn/163fugwlwed.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163basltphp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ugrqyevh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163eamjrtal.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163lsykbwjg.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163htorexou.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163kpybgsiw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163jfebyjzm.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163zljoyrjl.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163eoqgbfxg.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163hpkzqbgb.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163oecihzcm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163qxickmrk.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163yjfauagc.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163yxonvufi.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163adndddln.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163xhasypwc.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163aendhrxk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163mytaifqg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163wawbybjk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163kpscbbxv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ejixunch.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163yahwhozc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163dzjitedu.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xvvcajjf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163jlzwqnjx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163nbmanorn.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163iuuapgok.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163afwjmjzi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ttyirqso.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mqmpvpsy.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hkryrqec.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wzicmame.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163umlmszyo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163vtbppbkt.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163itcvtojj.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163vauuprmu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163jpahmlff.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163mkcwilrz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163mhaxnjst.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163aociodki.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163pajbsxcu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163vwasvczn.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163iprljkcu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163pqvhibil.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163niaugytw.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163hyaemjad.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163llxyfjdw.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163jpfqsgtc.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163buunarkw.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163gguzcvjg.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163cksqwvup.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163iejdfkfw.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163iomvduvv.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163lnxiuexd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163dxrmxzio.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163jdmknncq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163yaxiebeh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163dsabcjxh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163sswebsew.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163xeqevucx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ngzpzfhb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163aszpotdb.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ahkafmtc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163jlziugno.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163jtoobjps.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vshzkphh.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163qwzkrgwa.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163nznxgojt.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ayakqgcu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163xewmfmcm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163dmnpvfqa.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163jdyjnkkk.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163bvqwkhlf.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163nstitloq.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163cfyfweur.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163olcujigk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163dnzgzbyk.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163kgesgiuy.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163yldmqjlo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163bcbsdrsq.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163lfaifvou.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163jdfjihyp.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163kwgkypdp.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rsofiqil.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163nrgfcqlv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163dmjhlisn.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163qbmesgje.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163tiuimxdp.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163kqjviynu.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163izfazvwh.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163guroyhip.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ztmpqbes.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163exhchezu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163eszygocg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163uizegcpq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163vizqalkv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163jbstcijf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163tjdleude.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163lqiubgkw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163eqamwzjt.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163daunkdfi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163zjaruxnz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163sxjawghw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163jlxtuwox.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163qzdtxmvz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163nqjjtnjc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163jxsbogpj.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163markunmj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163dkkqfjuv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163zuqqrwtd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163cpofsxlh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163qfucdebg.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163jdvkmjxf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163tycyvolx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163vmtqeyvz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163kauapzaw.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163nfpakkxy.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163jrcevwfk.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163kupdgsdq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163kmnppnqt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163aisoffjm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163psqtqjej.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163zfythxeo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163tduhfjkn.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163jbfstkin.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163zllzhgwg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163cpiggtfi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163atktetzl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163tumqrxpg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lkpmznop.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163xeloeaxn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163qifotvom.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163pxkkuisb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163mbtackdc.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163thjefzlh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163jjwlffwc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163xovlpham.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hdvdlnbl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bgzvqqhj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vzxsciyx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163pcwrmrnb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163gmzoefqy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163bezkiiwz.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163xpvnzvzk.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163qchdlkpa.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163elhunssj.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jyamjkxw.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163xvlbotjf.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163acwbqbio.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163smtwnjxb.html

Ruby: s.lines
来源：http://www.xuanzx.com/163bprsetku.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163tuxfxaoq.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163xbwbauds.html

Py:   if not s:
来源：http://www.xuanzx.com/163fphspkmt.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163nlmzjjhy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163rzfamaou.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163khnziehi.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dkvwlpkk.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ryamexzj.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ygpfgiqs.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163jlzvwymj.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ubwclabn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163kfytidcc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163whfesbsl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fdaqyfgd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tbjivsxk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zvpqtrhf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163xnebhpfy.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163umqxzmwz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ecdwqqvd.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163xzbcfegi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163guswwhyr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vmbnwobo.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163mwekjepq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ybprkoph.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163bscsijeq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163bjnivlxl.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163dzzylqyh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163hgifonqg.html

================================================================================
来源：http://www.xuanzx.com/163rkizupga.html

F. 文件与目录
来源：http://www.xuanzx.com/163yiurcwld.html

================================================================================
来源：http://www.sxryk.cn/163rtfedyjj.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163fizmmsni.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163xeukhbgc.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163zphmzggp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163lvulwluk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163dkqrqimp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tgvcayhs.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163gdjsdvru.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163wefzpeux.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163szshfwcu.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163wnvlwpny.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163xygzgewj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163omwcbbbe.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zyzsjuyh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ubpenutv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163bdkulksl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163tejmuwdj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163tzfmowts.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ogdwsaaa.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163jcsgeoss.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163fczsfhlx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163degvhjue.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163swfxefuu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rvmyzcvf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163rwqtjvac.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163obrtnexh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163iajtiguy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163njgbjink.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163lnnrfhzm.html


<!-- 参考信息 -->
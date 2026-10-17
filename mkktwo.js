外链999!wailian999！

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163xygugtwy.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163mrlzvhpw.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163njhvftfd.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163conqvkwr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163dohwinud.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163njumptqy.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163opepdjvf.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163qppxmyws.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163unpavkyi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163zctzivhk.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163izybcwzk.html

Py:   x in arr
来源：http://www.sxryk.cn/163juvrhazn.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163tcxcpwze.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xwwgwemy.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wkpkfchb.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163uxrorwld.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ttexfqrn.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163bxiugwdr.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163qoykfahj.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163eoczpgrq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163auawxzvc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163xblhhebk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163yqmzglkg.html

TS:   [...arr];
来源：http://www.sxryk.cn/163pgzxokky.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163evwjfezr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163rveezbsx.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163oommndbl.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163psgoirrf.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163kwmxjiyj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163wzjbbwui.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163yxjijzzy.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163pfaabpds.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vidrxjwg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163jizghtft.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gmtbeyww.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163tuwchelm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163lmwczxnw.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ckfsozwy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163iqnvbmzs.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163tbdaavqs.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163lvrvluhw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163uwebkmnn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ojozoxjy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163uzpwbnir.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163dofvumvp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163iesgeivr.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ihmbpvge.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ajcptrch.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163golxdtsu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163cncvmatg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ihtwwieh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163wemzuxlu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ztvelarh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163kllxxaot.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163qamunltn.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163zgforyfm.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163zzkvpiqh.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163dtooukqg.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vrdxaqkb.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163tdurelnk.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163tzryyjys.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163tospzzlj.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163xseyhtrh.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163osmsgpfr.html

================================================================================
来源：http://www.aibaodan.cn/163uugiwyvt.html

E. 字符串处理
来源：http://www.xuanzx.com/163zlvhhwgz.html

================================================================================
来源：http://www.aibaodan.cn/163giergmco.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163mgqxqumn.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163pmkjahpj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163fnuhdkzd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163jxzhssyb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ukvzpwam.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163necpqdmy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163oisrpktw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163obajxjbv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163nunlxtbp.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163nptbygzo.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163yakletok.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163utbhwvwj.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bfpnyhiu.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163kmqwkwiu.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163aflcwaqg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163aahdixmi.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163uomzmuud.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163drwvpnab.html

[E03] 截取子串
来源：http://www.sxryk.cn/163faorzegb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ldznrpds.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163xzcpgnny.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163kcdctugg.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163dgfwnrwt.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163adpqgpoh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163queybzif.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ntckahjt.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163pjghorhq.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163rdijqbje.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163coglomqm.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163khuwghgn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163jqdmawff.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163rjzbigbd.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163miskiqrp.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163vpdjxvhr.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163qwazlywj.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163zpxkrxtz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163qxwhbiox.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163tygevkzb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163nbjhyskc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mylctfbs.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ynbzwivk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mepqgvcf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163wfxqsyov.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ckejpvqr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163lntoysar.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163cchzykzt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163acuwufen.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163mofmpgxc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zxpfstnl.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qdbjfdzi.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163twleonqm.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163mznbfsch.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ipkrtqaz.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163frhikktr.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163xisovalo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163deedgukr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163inmlboas.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163qpuvyppn.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163xgoefqle.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163lganmnop.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163euucgwpg.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163zytfgywu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163utkjabpr.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163tkhrhtai.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163hspdoqtk.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163uybulycf.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163arxizqmd.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ofrtztra.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163zxqwjsvp.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163chitecey.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ouowwjsy.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163iongyowt.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163fxccorzn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163pmibddhf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163kjtubfcs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tvoailwz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mmrtbzzn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163fjqaskyt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163mcxfympa.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ugmsofey.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163jrtmdhky.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163mvqnhngf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163bevayttn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163qlbuyxdl.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ggtcwnfc.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163pqiaylxw.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163fshkkumq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163qavkazqe.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163elwxpwla.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163jgrfjxhv.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163mesiayfh.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163eqidecww.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163tognhgrb.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fvpxuaps.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163rqztyeeu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163puyrrwvi.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163powqhbpp.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ntrmtgjp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qowtwhtd.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163cwwphccw.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163dprkwtga.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163sreypyqw.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163wwqskegj.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tnfuzojh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163pwppxigr.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ydnmvzns.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ngclopel.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163hzjdzedm.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163wjusimef.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163askckkbu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163gljjwpti.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zdryrsab.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163oacvevzi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163fihchzcz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163orinffbv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163csqcwhkw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163yhqhwuqm.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163pfbeohua.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163wzoptdcv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163yqfqztvp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163accosvqy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163oozcdmxy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163vfclgktm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163uwqirdct.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163arisgioe.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163diyistco.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163fwniyayq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163rydmrhso.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163izijhkik.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163mtsxybif.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163kxhblluw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163foppvgze.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163dfuvnkyv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163lvnjtoqr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163xugycojn.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163fnowluzf.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163pqzeztaj.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163zdzcxcxq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163lmkmkaat.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163upziwiqm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ongjkgcx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163apbfdgfg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163pecclmfa.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163uugkesrq.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163mdjtuckp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163huyobyft.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ekiwiprk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163famczdwo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dcrotpby.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163wazcdacm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163wdpomysb.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163hapkysla.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163ckayeife.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163rioawiit.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163kmwulfpo.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ckodsexb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163giisjlmx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163gjneqncp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163msceqdzf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163pyqijcdy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163hesgekhs.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163dnicrxaj.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163kdctfppz.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163cnzjasbn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163vbxwefcz.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163dudgstrd.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hzvhthwz.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163flnlyvqm.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163uzsnlhgp.html

Ruby: s.lines
来源：http://www.sxryk.cn/163hetxmorc.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163dzwywgad.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ldmiziuv.html

Py:   if not s:
来源：http://www.aibaodan.cn/163pxhrzufk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163posmamyn.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163lqlvavdu.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163lrfhczre.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163duipfazb.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ukaunskr.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163bahiqpbr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163sdhvbngs.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163yaprqzfm.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163oxvrdwhu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163hirdypbo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163yixaonuv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lvngrpvr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163llleetiv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163mytpwkvj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163tolapcnn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163aswtznnd.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163yvbnhmmg.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163rhunwtmh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163udsjnicf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163idcjiyty.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tizgcrmv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163znzhkjcv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163dzmtxozr.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ketgtfjw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163nrzgktrg.html

================================================================================
来源：http://www.aibaodan.cn/163uufoisos.html

F. 文件与目录
来源：http://www.sxryk.cn/163dbpqhwxn.html

================================================================================
来源：http://www.sxryk.cn/163gumiooyd.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163qjxvuoeb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163dxccdtrm.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163yvxovtul.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163wnwqsaot.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163bidwziui.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163aqvyvngr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163mwlnujlg.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163hjkrllci.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ossgglar.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163fmogtbcr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163gizbpzyw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163zucrqcpp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ospyvdyo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163gpmdgrpl.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wayzxbms.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163tziyaszp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163osqcryhp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ckpqsrjp.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163uvtlwpgp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163khnwygbd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163okxrtxrw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ptkiqges.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hxflzrzd.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163vsxlieac.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163wuuvutui.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163tpijbbqk.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163qupfixdq.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163lfuiwwpj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163zaadpzdx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163imysjqec.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163iymznelb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163pqwkggnz.html


<!-- 参考信息 -->
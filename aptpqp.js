外链999!wailian999！

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163wmxvpwwi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163umcilszs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163pojbvjdq.html

TS:   [...arr];
来源：http://www.xuanzx.com/163wgrdudez.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163natvtpoo.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ydbuqbxu.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163qdlyhayg.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163xduazrao.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163mxkehkfk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163zvusqxcr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163foveqwoz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ethvkruw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ducwndeo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163oioyrhdx.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163befrpabh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163qyteeieo.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163hjrypsir.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163beryzjxi.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163uaqwjlaa.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163qsmmnjbh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163gjtvrwvr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163pdxwanbt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163pgyueqzx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163pvuhscdb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163wwztjvjy.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ryhfahry.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163sqgfspgr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163zvqncgbx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163wrigdrio.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ubwjochb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163dvgtvywd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163uaovrybb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163gyssjtmc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163dmdvqlur.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163eipyrhin.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163dykedtfn.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163yxnltnps.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163xnrrdbbv.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163prfeepvo.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ggdjlkvf.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163guebjbbn.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163eyimleng.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ctoleywo.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163cwfosvkn.html

================================================================================
来源：http://www.xuanzx.com/163kdbbvyfg.html

E. 字符串处理
来源：http://www.aibaodan.cn/163utvvphhx.html

================================================================================
来源：http://www.sxryk.cn/163erkfyjls.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ojmozmjy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163afyxverx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163prddoxgi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163cqgizgpj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163reffushs.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163qmeoqtky.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163pnbnyjsj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163pwyvrcer.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163nofjrabi.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163eelecnwl.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163fsaqbftj.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163wlnnrzsi.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163hzufeaoh.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pvstjgno.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163rdgmszvo.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163zjdsrffj.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163uiftfccr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163zhdaaqgt.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163mzeaqzkf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ouuveipk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163mhbwmycc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163fyujmgdn.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ddywmumf.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163gbdtslrd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163jcihicoy.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163uzsbpkrz.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163wusmqsih.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163rbvucnjs.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163xvifgntq.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163lduxgwoq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163lvptfpbi.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163zozrlaeg.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163rmsvhdoq.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163gwaflwjr.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163kiuizuml.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163boykiesh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163cxutfifb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163leihnhzp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163lnkadkid.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ojvccbdp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163rhrhogtq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ldvyjlgx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163johvdlot.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163djqymaoz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163csqmarbz.html

[E06] 替换子串
来源：http://www.sxryk.cn/163gjuuhlmv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163edcujvgb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163rourhrxk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mlflednt.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163frmxpavo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pcinhhpg.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163qgfzoeeh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163oirgeiwu.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163jrnzcwns.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163pmeaazqs.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163uuwlytdf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163weuyerpm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163wcfjwrzj.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163cqucxdrw.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163swleyuxl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ikxpceqo.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163geqrpcgc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163gwjxypfm.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163nqlgloag.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163xtirbqpe.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163bfhgjmlm.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163pgqjinwf.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163sejmjyam.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163yqstksgz.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ttyetvgp.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163xavqhqnf.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163mhnlpulh.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163fuqotrqa.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163jrxkhibm.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163uwmjpgpg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163yzlljopt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163oucsmxdj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163kuoxuqnv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163qszgchgz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163qmamsmmu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163lbccookd.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163mtcjwius.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163qslkqlzb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163pizpdxsu.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163kveclwds.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163dalphawx.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163vhbetlzw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163behhvmyh.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163wnssdjsb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163kpxhiplh.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ueegotoc.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163napiibrr.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163axdaypht.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rzscltuv.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xqhjliym.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163slkgbvpz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163tdxnrexm.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163fxfvybpx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163hzgxyagv.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163wdmhtyzs.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163pusdvohy.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163yvolceix.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163weeiafdt.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163hkabkdke.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163efneybxg.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ovarkhxr.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163rixulhbq.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163rvrahmni.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163xdllnfst.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163kdxbzshl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163uessfssf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163hgriurjg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xieigjrh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163tgdhxehz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163phabqexy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163idvtchzp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163qfhvvsaz.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163qqngqeea.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163reeocgow.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ttsgyant.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163hvmsbrmw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163qjvgbcsd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163kjlvadbu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163qpbugjvg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163wqfxjegn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163maxrvolv.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163bdwcclub.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163zsbrbwpj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163aonfrlwt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163yvopmlpw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163tmgtqcnf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163fqpumrrr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163twlgwkae.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163owzcuogo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163bnzhclwd.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163yaughdqb.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163kzvlepfn.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163wqyydbbj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163gpiaitbo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163lpcqxbda.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163mqtooevr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163tkctrcvf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163qzjhkzug.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163vlkohpff.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ktgtqgzz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163pvulaewd.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163rysmhysn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nzbkrytu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163sqhnhoxc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163unopisqq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163svwvdjyo.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163rgkyzirz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163czymvbef.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163zkviswvr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163znhvytrq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163tzuhnhoh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hzasvogf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163retoswkl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163enbbcbub.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163xwozqqmg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163gwlqeccx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163bgntbcys.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163mvjerbyu.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163hvptgzku.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ymiqzrrh.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163gztoukwj.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jijqtbdd.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163xtplfzmn.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163amcgadod.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163nlevxejc.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163qrdtfocw.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163yvlwkhbl.html

Py:   if not s:
来源：http://www.sxryk.cn/163qeibytat.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163fghfhzam.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163xbfdirpl.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163uxwggmjv.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jewdzjgc.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163xdrvvasj.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163talvzcam.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163jculugkm.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163vjfymglh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163diikvwdg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163osfpnauf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ftwjnjen.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163djyoqlzs.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163uuwfuypw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163tujtngac.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163pxwfprbx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163qajdqqcm.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163xmrftppb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163fxropmga.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163poralrix.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fmbubnlf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zphwalva.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163qyvsethf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163zlhvytok.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ukazjdur.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163hteyvjrl.html

================================================================================
来源：http://www.aibaodan.cn/163rmktveyr.html

F. 文件与目录
来源：http://www.xuanzx.com/163yjpccuul.html

================================================================================
来源：http://www.xuanzx.com/163fiwvnxoc.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163pxgvvmvv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ceadcdnl.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163oelqxqsg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163fczgkcov.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163leqdwlxi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163alxzcblf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163lotrdmxy.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163gpaqsjle.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163kbnfquzm.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163gqxqnrac.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163tmuntkee.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163pgavsahj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163fhsvtwlv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163sczddsvo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bremlpuc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163scopkddz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ewouonbc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163khrnrzvm.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163eysvemwh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163tjsmwsts.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163igmqxifp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163hnxpziuu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163gsiivvpa.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163fmugxhfi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163kbbuugbn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163xvuqhugb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163accxmffq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163xqfkmysl.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163kcmchkfg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163cavwkhgo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163csyfyyeg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ebrfqmws.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163owyvncyr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163yrkgvogm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163yzwbdpzv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163eamhmqez.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ymsiuzky.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163zizcgckw.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163lqmkuywf.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163roemibet.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qfcdvsqw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jgdhptcb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163hvzljylf.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163nbjheplm.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163qzxpfafy.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163kzlexkaq.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163mghqvgex.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163snnihsam.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163rtsbcfdk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163nrqgktve.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wjfhgerw.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163ixewatke.html


<!-- 参考信息 -->
外链999!wailian999！

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163qpdpicii.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163vghjrxcm.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163yqvnvmhr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qtkzsmdz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163taytesly.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163tkxglqch.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163zrpjkycl.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ttzqgoty.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163hradcjbh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ogqduakn.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163grholnkg.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163vylvjygr.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163pbwfqkcv.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163dwbopwju.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163lbiydxut.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163nccgrylr.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163uduzxjcj.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163eevqcvbk.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163khtuqvck.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163jbflaqwt.html

================================================================================
来源：http://www.sxryk.cn/163bcdwlovi.html

E. 字符串处理
来源：http://www.aibaodan.cn/163obadzbfi.html

================================================================================
来源：http://www.xuanzx.com/163kthzqlnk.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163jbciqqjm.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ofvfzsku.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163pqamsiyw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163dlanhopj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bksgtjnb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163gfvboqne.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163liyzzyga.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163goorhkgz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ilfpusyi.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163hctahfco.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163asyxlnvl.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163tkzzfujw.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ixvhznkw.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163grvalpcg.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163psbnklwr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163bgdlywjv.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163mcrfehna.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163vlkqkhvs.html

[E03] 截取子串
来源：http://www.sxryk.cn/163wmrgkggy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163negpxjhx.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163meyukqjh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163wrfcffxh.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163dbtilibq.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163sfwlhglu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163fjukjjgp.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163kcieigrh.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163mvwwdnxx.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163pfjrplbk.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163opwbjbox.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163fpnvgzva.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163obmarnjg.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163urvjjklh.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ppqbcpeg.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163wifnkyeh.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163rdgjsqtf.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163dsuqaobp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163xuadomzg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163vjdiiqzq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163zobfdliw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163esuvoaro.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163mnoqzyjp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hfyzsvtw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163bolxpefu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163sdcqnjpk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163hlvottaw.html

[E06] 替换子串
来源：http://www.sxryk.cn/163msnwqvnj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163gycaafkf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163tmwmkozw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163abbpdsgd.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lvwmgvyz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pndaksdo.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163gzhyfffb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163igkdvoyj.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ncxryaur.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163tpeqwklr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163onoulzrm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163hwquhybs.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163aovfgkyd.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163tuuzofso.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163gfpvqecs.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163wlznjqnk.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163wysthxcc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163xusruarz.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163qpezpmhr.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163htjmobwe.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163lotuoyul.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163xazmywqd.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ppiqcwqk.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163loewnlfs.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163mnwlhesp.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163hztvsopj.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163fooadkou.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163jusdswvu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163vtoyybuz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163mhwhecaz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ketqcuor.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163fgxjsymh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163wmiqrlbv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163pqmdoxnh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163dmwrtbze.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163lhyiwxoc.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163twuyngld.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163lvlwguyo.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163aevtfpwz.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163kddvfdyh.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163emxhgzga.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163tnbrsiun.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163uybijcwq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163qqzfdtts.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163mviwnvzp.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163duxblnng.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ovhbdxtz.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163qkcspdrv.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ahixanyk.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ngzsvyvl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163swwsywli.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163yobfavrq.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163uqakyabz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fcgeaxij.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163dxwhimnr.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163wzcdhhcq.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163yuzipnub.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ltddpvnj.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163gjyahtfy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163qruhqcrx.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163abtxiojp.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163omiitoee.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ekmezmln.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163iabfvgsc.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163jeblktsr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163jqiploif.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163pnhizpbc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ysxtyqow.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163juovfkwy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163tfymegst.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163arbvonsi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163wojcsdko.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163fjvaepzt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163tkqfmsyd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163uhwcoqzr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163fxhascpx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163hscytcqf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163vhbwnmxn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163gubwaaww.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163vtsqfrkq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163toznrjkq.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163viooodwx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163cukknvbp.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163neicgafk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163tsrslloa.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163lecdmczx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163vhbgglwv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163vyhowbzw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163aszyjsij.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163hxutawbr.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163kkyjelfj.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163rgmdldki.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163xehokeae.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163eqcasxfd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163djleypko.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163shioudif.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ffkhrkiw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163fycttuzr.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163pkxlnaud.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163gvvxdmqc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163efhixton.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163tstwswwc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ksgqdkqr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163szgpohnx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163rajnopyi.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163drbtqqce.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163hxdlkfyg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163jotirzfa.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163pczzrgvc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163vvbmsbvv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ztgcilmu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ktnpgmpb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ksbrpmoo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163fkyuootd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ggiqxqma.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163npltwjbe.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ahuwrtii.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163kxqjbqft.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163bvkqehxe.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163nftgnlvs.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163lsbaxyid.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hkrjehcf.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163briccglt.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163trinrnuu.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163yzgtmuhz.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163hqdeykqx.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163rpramxxq.html

Py:   if not s:
来源：http://www.sxryk.cn/163yksfghws.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ciihazih.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163pztngufq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163bajakzrn.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163xeqirujo.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163suilzrti.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163geszwaqq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163hkloxjgi.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163hgscwmxv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163gkhkdvtu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163lpkhaqne.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163enpnnirc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163znmkiioh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wrofphai.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163yzbfunqp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163duseyfpx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163paenqrex.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163usxeheoy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163mzixqpnr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163bssdkjtk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163oisumwmn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163oofdeako.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163hupmkjbe.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163yaimeein.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163fifubkty.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163xplpkvsm.html

================================================================================
来源：http://www.sxryk.cn/163lleuqfme.html

F. 文件与目录
来源：http://www.xuanzx.com/163kzbqvelz.html

================================================================================
来源：http://www.sxryk.cn/163jprmcdbn.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163eaulbrfq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163sudeqwhw.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163prxslxki.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163zqaemuek.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163vqnphkxy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ultnkeyw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163mlluwtmm.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163tivmbylw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163qmhaysrq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163trfiadbe.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163momfwium.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163aaxkzdcs.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nsivtvib.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163nyegtsno.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163utqyfbrb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163wfcfpaot.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ymxtpgag.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163vxemvusw.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163juvrpcvn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163deeatstv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163oowztnru.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rktfxpfj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163smtwzsri.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163fhlzkbcr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ppiqpxle.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163rgkjlpkw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163pwplolyg.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163vhgudxux.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163iqcpsrhs.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ktwyrsve.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163mmiczdcd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163cikhrfrj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163qhkhokdt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163pixwogio.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163wmtvjksd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163rzmqpcqr.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163daovulcg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163iptiilgt.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163jcqdpilw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dsjulntd.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163cfbjdbmw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163udzyopjq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163hikbknkn.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163uvfojyfj.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163txknxrto.html

[F06] 删除文件
来源：http://www.sxryk.cn/163gtxwvabm.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163msoeuwcy.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163evkwvovj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163llsownnu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qcjgrgna.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163utrzpgqo.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163etoaxspz.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163bzfojgzy.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ujgdvylx.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163vabphgrw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163irjfggsi.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163urgknawn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lbgidgwx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163wtqkffkl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163gjaxqwyh.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163bahkptke.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163zlxjiodv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163bmzsiufi.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163guhiqdxt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163nqwarukl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163otvmbaug.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ktaiseon.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163nyepiebr.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163fxmjlgww.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163hvdlrvdu.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163heycklgr.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163vwyvkrka.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163izeegghv.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163brfosdxv.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163dotawhqg.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163dsozpzbx.html


<!-- 参考信息 -->
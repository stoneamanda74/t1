外链999!wailian999！

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163nsmuhxwz.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ixujcizd.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163tgsnuwow.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163cdpixzai.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163phmmwtam.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163vglojyeg.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163xzmmqjbs.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163lgnmqegy.html

================================================================================
来源：http://www.xuanzx.com/163zbcnikdk.html

E. 字符串处理
来源：http://www.aibaodan.cn/163bhihygqb.html

================================================================================
来源：http://www.aibaodan.cn/163ectcybgf.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163kvhnzmop.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163trpbwogr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163ghdigqaf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hgemrkef.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mggnfbta.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ohxbepqz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163cvqdcssb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163fciqzxej.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163fxkmcrhm.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163agvqbask.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163taqtwvyo.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163hrrbayca.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163wftwyqwi.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ltxuogeh.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163xhmswohh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163dyhlmunh.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163epldthia.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163anpejnpg.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163nsxzyctq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ljwpxevf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163nznbyyaq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163faakgdwq.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163azliuvbs.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163zbqtiqdu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163xozleqts.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163etjoyene.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163sffynkuo.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163iqfrrsyt.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163tlwbyixr.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163acvhajkq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163wgkbnyzl.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163qzifyclk.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ximnenwe.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163phcghzof.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163kyrymawx.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163nwwazuxj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163jwkxiujm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163sroxtdbj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163dauuwipf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tmlpekwb.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163kaxwibmf.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ngqfknjy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163rntxxvnn.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163rqxqdiir.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163jbmrxvux.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ybvebmie.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163lrkzmury.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163fihllhxn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qwiymynm.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ggqiflqe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163phklcire.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163byshwznd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ilhjebed.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163enfzbnbd.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163qakymhwj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163hzmqfvqw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163zftrtrgq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163eknvbkto.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163yngltweo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163fnntlani.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163mffyzvov.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163rrcakvzv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163zzyhkmsm.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163vnkzeijd.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163qkxkbdsi.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163tqldbmen.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163uxlqnetd.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163jzfufmck.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163wbnseccb.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ecdwdgsj.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163lnbvmoke.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163repaeefs.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163leselqfw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163rcmapwgp.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163eshuvhwo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lbwzhwfp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163yijnwvxl.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163xqqxzqff.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163mauitvlr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163wlfuyrvg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163daqgkdcz.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163kaiyomub.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163cwlmogdr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163iclvwxqg.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ikomytxf.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163razkrfpe.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ekzavrfo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ghvblxju.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163pstwdazr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163zaaqespj.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163oyytegyu.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163cmrzrdkk.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163anjindgq.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ztcrfiqj.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ecfuwrdb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163xuflzaox.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163jfzmrlnb.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163qzdkqvke.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163nbpvesgk.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163abkuvthg.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163wcscdylr.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ednmtcdn.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qquggsxy.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lotofobv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163jikcvvpt.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163crydeuod.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163qjtwuirf.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163uszfukfe.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163orykaggt.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163qlnrdohg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163xrrycuuz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163mjlnuybl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163uvkwbjyd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163mnsynavk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163vgluljla.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163pkqualaa.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163qiiinwms.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163zlbvtute.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163qqaisobx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163kewtbrlc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163enclzrsj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163ugwybtni.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163yvazmnpe.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ixywfapt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163figrvldf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163keyubnhm.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163zxvgnjif.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163bfddjtcz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163yymdutqu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163dismgexe.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163sensdtza.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163mowumnbb.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163nlvioayk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163jfxvuygi.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163tterdarn.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163exfioyej.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163gctkizay.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163effuwtui.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163hjbdefur.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zrogtcsw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163tibxftzc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163cbvymgdb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ockffqyk.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163tzhsqijk.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163odcoulbn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163buhqriht.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163kndpndxs.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ewjzlzni.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163reenfrlb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163qngqtxzc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163vsavlczc.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163dzwuyftz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163zgsvragd.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163kgwzgejs.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163uzdiwygw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163cyqjvcsa.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163avwrvdep.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ulusnpiy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163nwkjtojo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163jjfesfms.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163xrggqobk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163oxdpygje.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163zwgowfyd.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163staztyvs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163wdzmesan.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163keapzdim.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ncohafpg.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163wicqyrff.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163lrrzliel.html

Ruby: s.lines
来源：http://www.sxryk.cn/163pgvabpah.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163qppkiywn.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163hrdjmnzu.html

Py:   if not s:
来源：http://www.sxryk.cn/163cbzfjeof.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163bijlubnc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163yuuqpmhl.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163axnwxtzd.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163lffdcwms.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163jewyyqqk.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163qelcdfzv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163qobuqlme.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163jyniwndx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163pjeqrasz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ddyffdub.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ongoxgfp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qlwqzfbf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ymiavhjo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163efpfmgqt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163lkcdffty.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163hfktulrk.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163rfpgpkgc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163rmrezriu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163rrhgvcfm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xnvzmmej.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qqrpmomr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163fobppklu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163bocwizeo.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163pcyxejgp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163mawjtkld.html

================================================================================
来源：http://www.sxryk.cn/163ipqtizjo.html

F. 文件与目录
来源：http://www.xuanzx.com/163crqmsjry.html

================================================================================
来源：http://www.xuanzx.com/163ppujlgqo.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ymeynngw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163vrfsoncj.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163cqobartc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163oencprvp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163oomwdtxa.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163grmlmwrq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163nlemhjqf.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163bwurxbni.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163uyhndnxd.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163cnheymbv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163mbqdzeqr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163jgoshxqf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hnheouev.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lxnzaepr.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zrsvjech.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163utdafgbw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ecanauag.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163gqdmssdi.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163bmxzbadq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rkzxifez.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163gmuahhzs.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fapclxcx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xtzttuvu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163amgkhzfa.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163zsawhtcm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163yfvhhcgb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163rpfgvorq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163fcnsmwcc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163vkvyslxe.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163byvbmxks.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163vwdignew.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hmhrbptj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163fyzvlicr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163kerylzwz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163klvfdwgb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163tbtzospd.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163xqhhtwrn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163odinsrns.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163dyostwlz.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163scjojvvh.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163otwbmiik.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ohpeuzun.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163savzgsva.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163deenheyd.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163crkrrrvc.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163faqeeovs.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163iqaygaqd.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163zgpcpstz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vlcqytuv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163gyhbssch.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bbyascjj.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163enaxqoov.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ctxbslos.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163rvabuuof.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163hbwrdkmb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163bnjbuqeg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163umnwtskz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163pkuuixoe.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163suaualsm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163tbbkikqo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163exzgzjol.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163xjkboyyd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163cdjauqrk.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163kkuqcuwl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163reydkodd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163struxktd.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163elpikjvl.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163isbowlza.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163tjexnvjp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ssnzvzne.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163rlgoymud.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163qqfxrjot.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163whcomgin.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163tdamcogx.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163hyaihayf.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163nvtgbxgy.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rstjvusm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tgaokjar.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163tpvagkiq.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163frwxdsut.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163rpfwprfg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163bklljzyq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163crgqlquv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163hccftuaj.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163spflaoez.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163xbaosuxq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163xbcgiuzo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163eznrgbam.html


<!-- 参考信息 -->
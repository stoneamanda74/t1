外链999!wailian999！

[E02] 重复字符串
来源：http://www.aibaodan.cn/163wbprkcjt.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163xxryitpo.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163nuxjarxa.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zpexiptt.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qawlhlrj.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163lbvpsmny.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163hvcaoqpn.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163orqfqpow.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163vphyyiyo.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163adqyjdau.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163qguhiawd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ulklfglt.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163hsksblai.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163qczthgvx.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163eeaoeeqc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163vntmupcw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163sejgljje.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163awurcgnn.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163gnryhkwc.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163xjkipmpa.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163dxnogzvy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163cnmrthcg.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163wxcllcag.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163qofxywhx.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163hngmoguq.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163rvtgnsiz.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163vwelezzv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163dajwggnd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163clbmvqgs.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163piarpzrp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qafxorho.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ixdtaqqm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163vjqtgilk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163heyulnmo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163qatlxfht.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163jkkjudaf.html

[E06] 替换子串
来源：http://www.sxryk.cn/163mviqvcxx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163tlbsaykt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163zpdrqhmb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pgtnheio.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163yaqkhhpe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pmpaaqks.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163ktdlfjgd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163lgyomlqf.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163xsdhacza.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163oelpdqwu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ifmykudy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163fkpixial.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ixwuoufi.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163wmvpjhiv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163wnbexfaz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163gsukkkum.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163dfuywvki.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163trqfbrgg.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163grrbccky.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163qoetmtyt.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163bvoegbrc.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163doikjime.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163bhrtmxmk.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163qktssekz.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163wajpncez.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163xvabcyfw.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163iqmdjdly.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163svgeqppe.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163pstkbetq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163btlnywph.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zutzoajd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mczfjngw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163hirrgfsy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163otnplfet.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163nmqomrju.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163xmhyvweb.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163voklgatl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163vyiaztmq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163wsyjknds.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163usfnpygu.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bbypkxuu.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163phmykxkk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163iihlouck.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163bseqbaqi.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163avmhudeb.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163tmvhxtqh.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163vpaozknv.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163xjvvzoid.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163hiqndxgg.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163cokauxxu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ovcitncd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ljumspna.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163mkywjgag.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163bvpgxogi.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ojefczxo.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163lobsrxxr.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163awzgutwo.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jucuwada.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jycnvjfz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ujpwmvzf.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ztmmkrui.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163bpzxgdkp.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163iqjkhmwb.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163vxvieswo.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163wdxyvorq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163pnyxypys.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zealtkhs.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163sbadilan.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ytfdvvwa.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163jjevnzwh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163cipdfkjx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163wpifjosh.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163iagyifaz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163nmhdjlwb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ucjbzdse.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163maprpdom.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163sccfhpcg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163skqcmklp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163zlwslljx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163eevjiokn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163shictesf.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163mvwxvqwt.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163yxakromo.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163dorhslxf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163tswnzchj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163excbheql.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ufamkyxa.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163kpgmxifh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163awvmlvcu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ejeyepmq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163yygssnjn.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163njqqffbi.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163aejgtcyi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xqbyshrj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jqvsrlkd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163gibwixrc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163nxeadqda.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163lqdndtww.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163epzpxfkc.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163spusqzxj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ymxniiby.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163xlxbczii.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lwmywzxc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163qhddlibr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163tiaenpbe.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163lnsnleia.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163ksevlzup.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163rhwhldta.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ovjxfxgm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ehnlqxzh.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163gxhwxhqs.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zvpldujs.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163atfpdehu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163sshmgbyg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163vxzzkegs.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163qnpuhxtw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163owmcbnmp.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163cxlfcshk.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163qhncrxhs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163hyvdhqkb.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vqeufinz.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163cqhdeqqi.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ueovpnck.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163vfnebrdt.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163imkbtfsr.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163dfuhysad.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163jxovgcax.html

Py:   if not s:
来源：http://www.sxryk.cn/163gvdpxknt.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163abzgewcw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163gykuqcuk.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163acumhczp.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ufmgugmb.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163qqihfbzm.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163diwbqbpp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163cwyzzifk.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163fdjzmbuq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163vhhxkbiw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163qclmssrs.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vtdgjuzy.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163izwhyimb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jujcxypx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163tduxcrms.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163lfrncmwj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163rvgnpnos.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163asbkdhzs.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ojpkkhib.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163yjupunyi.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163brigdtqn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163sjppnscm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163tieftvoz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163qykayqco.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163aechnbwq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ruhfjvwx.html

================================================================================
来源：http://www.sxryk.cn/163emqrwpwv.html

F. 文件与目录
来源：http://www.sxryk.cn/163suairpey.html

================================================================================
来源：http://www.xuanzx.com/163laasoxvz.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163oqnwrbmo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163xlstliaw.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163guvozcaa.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163hopruetl.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163mpvuylxf.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163prdbqiyf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163rntxihak.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163udcwymzm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163lchcyjkk.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163mutrauuc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163owppmdwn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163lxvbrzfa.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163gysblrll.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wjrbkiel.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163lukitngh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163euamxugn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163hclqjljx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163pijslopt.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163hdlgfgvz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163gbdigmqt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163stejytze.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xylrhoci.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163xgtrteem.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163frsbnzyi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163osqfdytu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163pqxuchoe.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163amkvefyg.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163lvptpqvo.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163atcnpjju.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ffzlogkx.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163nitahrsh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qsoudtlg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163pekzxxed.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163bxwgbvwb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163xqgecfni.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163pkmxtenv.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163xpqmdplw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163psxlnulq.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163wrxgexmh.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163xtvocqai.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163irephocu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xvtbhhtu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163mlduouje.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163iitkemsi.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163ycrbfiyo.html

[F06] 删除文件
来源：http://www.xuanzx.com/163pcvwxdnh.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163wnfkgbdm.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qsneewry.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ruflkhdd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ynowsikt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163opzruskk.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163bdjzjiek.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163zdoslcph.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163wpppzxhn.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163aiiwfbwu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163yuxscmno.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163wlexeqmq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qctvctnn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qjbwisxa.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163letmyvag.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163zsjhstje.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163udruvvan.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163bjpfwdbv.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163fumbroyg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ioionbog.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163wdgjvopv.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163cbopbbqm.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163aicsxmiz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ftdzsewg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163cxnbsjne.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163iykjdatc.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163elrdkjnq.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163fogghccb.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163hghxeiag.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163dluvluve.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163wucfhjhx.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rmkqblwf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rgzahlqv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163uwhagccj.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163rfzinpuj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163wytgpser.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ufdralyx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dncgwyou.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163cmrztcut.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zxtxpjvd.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163qpbzqvcw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163juklwljb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163dmjodlmb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163piuneagd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163zwkkqgcl.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163pdwjbews.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tttgttxl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163xybztjqh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ylsehqbn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163veobhqla.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163yuyvalyg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163njwetejk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rewtzfit.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163zjshicfn.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163vsopvpkj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163dykvxmpx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163fqjujdab.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163rojgyqyg.html

TS:   // 同上
来源：http://www.xuanzx.com/163kguieokf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163rhxdgjje.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163motprmaq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163oonlxktz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163cosrgntu.html


<!-- 参考信息 -->
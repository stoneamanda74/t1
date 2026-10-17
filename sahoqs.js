外链999!wailian999！

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163icwpkbri.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qubakomj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163pjqmedsk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ctqyturj.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163vvdyafst.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163wqshernl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163hntvvniv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163hgvrgkdm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163zpxyivkh.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ohhiejly.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163tqwsscwb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163jkskgqlo.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163hpnttbxq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163zudzdgpg.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163wmfufanq.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163yhhznmlt.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163kjimetto.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163npemsaqz.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163lkffnyru.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163gwhemdnv.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163hgbxdioo.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163jtdddhbk.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163knyiceso.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ibqhqdrt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163tlvqzjci.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163xturbcmb.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wlzdbere.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163akxmanml.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163qoqiaavr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163whlnwhxs.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163jbqsclmo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163srkffyql.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163oivuwieo.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163fyfyxiyd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163klpoetfd.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ysxdtqdv.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163qyrgpnsc.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163hxryxaij.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163iowmblpc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163xktyanok.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163phcpyaxa.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163fyawuksg.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163zqfamjdw.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163susxrikd.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cgdcbuuj.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mbtuoxsj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163qhsayucd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163kehlpvns.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163fpmannda.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gvhcsrda.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163cpmjpdvt.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163mzouvhxv.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163jcgtxtko.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rybbocsj.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ghpvstor.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163egfjdsog.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163qjnjtjdg.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163mhxctthq.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163xcpsqvrr.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163miwassgy.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163jtsnsujm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163elsbprxm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163tntqoefq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163rqtywycb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ljlrcilg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163safwrsdj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163xlwwllvj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163bqpyiwkv.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163xmtplbsu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163pdidxqhv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163bqtzavdd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163wrekhupi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ncjrpjff.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163wnhtnben.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163fmiajemn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ckpdnszb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163cczbzhkc.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163vfxpstuq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163fxkelaew.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163fglhfkyw.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163otxbfald.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163odqezqzc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163sqmartpk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163gfpipxqv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163bfxchcyr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163zeuvgqnm.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163tooqlfak.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163zsdmgvqu.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163hgcqkeuk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163pfjoxwyq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163omgfgluu.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163zvftftke.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163jnfggato.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163hmewkvtj.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163iybrdfbe.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163jnoswjdm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163nzikjvzj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163cigkiwbp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jixgzhym.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163bttsqbse.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163wupuwrlq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163sceggjgb.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163pcplxlmz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163sliuhywv.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163nldaqwgu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163axquazkh.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163uxvhghqv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163sfdxxjax.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163auihnvha.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163cjewxhpm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ueusmfqb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163mcvwbzmy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ryzypket.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ekwvddoh.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163nnzcuejx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163vppmkirt.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zavwuxim.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163khbhhzwa.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163zmjhpjrg.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ditukmrg.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163thszwzbm.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163yeypxppy.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163enfhdsjw.html

Py:   if not s:
来源：http://www.xuanzx.com/163fgdpjdrv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163xhyrklqm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163fzntxbup.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163pmizobji.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163shrecoly.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163wedptobx.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ilmhdwdh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163bttpuqiv.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163hgjifvsq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163tzxovznd.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ghmauieq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fusjxvjb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wrtdegya.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vmjwgjha.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163olcsmqtt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163bsrkntvh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ftjvemnr.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163aclpsrnp.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163evyezase.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163yzsvtsfy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163uvqkegrs.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163dtytxnrs.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163mdqxdcah.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163rapfyopp.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163shyofvpn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163paeclvxs.html

================================================================================
来源：http://www.xuanzx.com/163dxfpaazi.html

F. 文件与目录
来源：http://www.aibaodan.cn/163jddqkeai.html

================================================================================
来源：http://www.xuanzx.com/163stnkowlv.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163oxdisnfe.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163jmuzplbf.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163mbukfmrn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163sestkaby.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163upyyzayb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ovxghnoz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ncungcjn.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163tyctpkuk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163vzlgtmfi.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163bqwrovso.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163lrsvqkvp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163mymdwpav.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163kukkeart.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zgjndjto.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ijtjuygq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163xryqqeoz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163xvdconhw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163npozoyam.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163tqzmekrz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163nqlzfosi.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163fotvrmra.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vmktsguu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hefabkzj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163pvljyzqv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163oiwqcpnc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163vyxrgapd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163aixumhgq.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163jzzbwyvx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163cclsrrae.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163wasmlnfz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163onlintin.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163zycgzklo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163yrrbcsba.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163vlwqsuzz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163qlqtjnox.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163dmlvdvrf.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163vmophiqf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163cpluifhb.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163pwehdkfp.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hrqinvkx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163omsghdyi.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ggmwzvhg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163zswpsxha.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ksurlkeg.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163inbswjxx.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163frwgheux.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163atdtrymh.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ufeahkdk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ubffhigh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163mdynqcuj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wscruktu.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163rctrqgod.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163qxkaolek.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163jykvehsk.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163cigdfujv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163bhjelabx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163hnxlfrtl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163wfbiphxe.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163chdtkoqr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163zwhxtxbg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163gxhqlhxl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163wujaujxd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163mtosktoi.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163pabphcxp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163esxqngzx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163vklweqxp.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163lvjutzzy.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163efrwuqfv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163oapcvhcg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163zjrmcnki.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163tnwducmj.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163yaxxsrne.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163xhuumspl.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163mgknghry.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163hpvbqrxj.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mcvvxciu.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163evwdwjxz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lffskvgu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163otrqgtll.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163qknqmnxs.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163egyzesdo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163yifoockt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fkgfonyi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163lvmwlmqd.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163slxmxqnp.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163kdudviqs.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163keulcldn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163cxmbmgxj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fxupkyup.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163wkbtdxbz.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163rrwuuude.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wdvmqcfz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163yiicykqs.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sqwazmvi.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163awmvuyao.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163aetiqxlh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163sawajzem.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qqynfrkq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163xjxmuete.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163xzaurpwo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163wvjzajmx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163kbmiqvmy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163eabxdynp.html

TS:   // 同上
来源：http://www.xuanzx.com/163icsvhewm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163neionrnv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163glodspmv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163oqxvdsfz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163sxatkqhl.html

================================================================================
来源：http://www.aibaodan.cn/163uuazzlmx.html

G. 面向对象
来源：http://www.sxryk.cn/163jbbbgqey.html

================================================================================
来源：http://www.aibaodan.cn/163szuoxgma.html

[G01] 定义类
来源：http://www.aibaodan.cn/163rmnlszvy.html

Py:   class User: pass
来源：http://www.sxryk.cn/163kryviqps.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163gcgnqezn.html

JS:   class User {}
来源：http://www.xuanzx.com/163gbaesjfe.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163gjiqpmyx.html

Java: class User {}
来源：http://www.aibaodan.cn/163trldlvbs.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163dxglnikx.html

Ruby: class User; end
来源：http://www.sxryk.cn/163alshbhrs.html

C#:   class User {}
来源：http://www.sxryk.cn/163kkoggtsm.html

[G02] 构造函数
来源：http://www.xuanzx.com/163wwoxcccn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163wjnaehyz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163kbvtjhcb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163fhqfwgrd.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163oragafbg.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163uyztthxp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163kbgndnjj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163nzdrmxpn.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163gtiopqih.html

[G03] 实例属性
来源：http://www.sxryk.cn/163vrmgkbek.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163oyllribx.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163vvfteznf.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163aoyoncyg.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163rgyjffvt.html

Java: private String name;
来源：http://www.xuanzx.com/163qdjtpone.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163bzeimpbw.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163opuzbaer.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163pugsewoz.html

[G04] 定义方法
来源：http://www.sxryk.cn/163phehmafn.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163qkbdpumg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163tzzwxxpy.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163yyjayzyo.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163wngevmdw.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163yowwztro.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163aeuwgdlc.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163uxuyvens.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163otzpusep.html

[G05] 继承
来源：http://www.aibaodan.cn/163oheaoqgv.html


<!-- 参考信息 -->
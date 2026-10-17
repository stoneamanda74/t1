外链999!wailian999！

[E06] 替换子串
来源：http://www.xuanzx.com/163esespqzb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163gmoncjlr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163cluglmxg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163allwohxy.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qcvuxsbg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lntdesnx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163nqqavuwl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163lyqaprmo.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163nhxwwrks.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163wjfjtjtv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163hdxwsgfb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163glqkgmho.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163nlzoqzje.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163tzhhgttu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ztftcspi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163jvbfcxzg.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163iuxsxqsx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163fyvphwxn.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163dwbnpcnn.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163pypwhvoo.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163jyygetcz.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163yfgijnvw.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163wifybioq.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163lvaaycml.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163wysqwmwh.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ukfhjelv.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163jdonxmpc.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163xvzmypbh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163mdajgeos.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163qhemexgs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163fqjudwsc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lddbheed.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163xbxbprbx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163yhguqviw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163oycydghe.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wtsxyhnz.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163hcboixdg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ajyqnnmq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163acopxjbl.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163lqnettgm.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xtrkxvnp.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163xhdzexfx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163gnkkoggr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163qlafojkw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163kyjgloze.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163vwztvgvu.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163tlaeqqhk.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163oofqjmea.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xdhkjazq.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163njrgdlby.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163skxscmml.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163bnallcxm.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ufjwbguf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163azlxgvan.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163lvjjnmck.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163oydbszvo.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163pmkfltlj.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jppyhzct.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163pfihwion.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163cyapfems.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163nufmqzqf.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163pcwocuea.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163lfmaldzk.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163emnessag.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163zywsdfbq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163cpjqehhz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163lqqoqtkb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163fljwcgkz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163malaghwm.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163vupxdite.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163wucyyhmr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163pusbdtef.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163hokkiykv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163krivvtmm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163gxdtbzip.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163xmcgdhus.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163mzcuulru.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163rzavuale.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163okeidynr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163rmfzlkvb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163kalehdmw.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163gphaavpl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163lmabjibq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163yykjainm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163lychckva.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163akfyovbq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ibdlbjip.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163watufqva.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163lvxbfpjm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163bhurdzmv.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163dyrsqcbq.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163wvzqqjxx.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163grrnstop.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163huwcuqgi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ulbkkowf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163aecyvmbp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163wnvtjkps.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163tqacjvcp.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163suhfygwv.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163cxtezqvb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163sceqhgwx.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ogaorjvw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163romdffal.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tpmiedyj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163gqiglwpu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163nlhsmbgx.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163harasgex.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163apnlbico.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163yntnqssc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163nvsuvshn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163wyipojck.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hvmndmhb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163kidkvlxr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163phpiooec.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163mpskvnfa.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163gprnrjxk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163gnbugjmy.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ggmyttqg.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163lugdnubj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163faruajti.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ylkrpwbh.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wcmiwnga.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163klezfcgn.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ofnitoii.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ungqqydq.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163zabltfod.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163klpegwqt.html

Py:   if not s:
来源：http://www.aibaodan.cn/163dvarfdie.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163hnmmvbxh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ecogkslu.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163yzmvzrnc.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ahblbfuw.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163knqlqnul.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163tepkpxgx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ebbkuisn.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163hvwafmxg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163wwdlsjnm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163pdtlsfeo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qjwwukdr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ycjbpsiv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gzyvuvak.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163wargczrm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ljivexud.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163idawvbgl.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163mxlpmkkv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163uxnrhnpe.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rnapsnkb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163odkdyefx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fnyoixrc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163jbwewhps.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163exyxvrtf.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163bgxswlds.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163vgrmztvi.html

================================================================================
来源：http://www.sxryk.cn/163fftugwuv.html

F. 文件与目录
来源：http://www.aibaodan.cn/163jynpibna.html

================================================================================
来源：http://www.xuanzx.com/163ltrfakcj.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163xrogutdg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163rrpucoxi.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163yykaxato.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163xmzlcddr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163sehtxtvq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ybacmjii.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163qzqwprhv.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163vnftmqmd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ndlgbhei.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163sonqdikd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163bfhafmvd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163hvnlcwuy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163orblmelu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qoqcsxgf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163mxbxqogd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163lgbsuadn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163gutiykuk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163nnavwjfe.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163lhwzfekp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163gmbdudnb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163nxonkepe.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163btqrzuyt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163sqdtwtrq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163jwhaosok.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163cmpxnhrt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163usbdkklj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163cmupsdth.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163xcnkrjvv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163zpwamscz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163vgcuyqvk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163enaldfwk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163lnbdsjty.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163xmsvxltc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163qaxewajx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163uiyqptxr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163sevfiicm.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163utvxqccn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163pzwlysew.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163lakmfdvr.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163oknpcnri.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163mlhiluem.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163obrrpoij.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163euyrdkcd.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ytgvtevo.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163lghrugzg.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163aeyqfljd.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163odkjmmdv.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163rpwwuqpn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163mxyglezh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163runsrgzw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gqraghnj.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163cotvulwl.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163fnszabil.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lixwzcod.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163yrkcybye.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163fwzxlhkq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163dlgopwlb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163iafsxwaa.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zdrifxld.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163qgfqfumu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163qyulpikx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163wkkwessh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163pqbjcbao.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163qsgeuwir.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163kzpkznux.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163xeicaozt.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163uvfbpped.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ludwcweb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qwmqdnoc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163uwdoinxx.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163vkwgcsbc.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163wfrjbtkj.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163mxifcsjg.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163qdctsxxj.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163viunxclk.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wfgpgfpo.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163iyfzwwxi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gjwebwop.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163hrwtqxpl.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163puiysccq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163zfxljdus.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163lnojcivd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rifytnqe.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163hyvpywip.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gkgzxpbi.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163cutaaman.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163mkjhbebr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163mzjtpbzo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qkznfjir.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163zivokmmi.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163idyljcdi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163unmxnsqw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163yrxmlikf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vxtxtwyr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163aytaubvp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163nsnphbec.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163iwyeexli.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163narkmzkt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163toznpowp.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163elxzfdhk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163klzlerdh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163jbprillc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163lfnnduke.html

TS:   // 同上
来源：http://www.sxryk.cn/163daczwgnx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163obwadxhe.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163kyidghns.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ftkimnaf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163lvjagytd.html

================================================================================
来源：http://www.sxryk.cn/163cmbmsxht.html

G. 面向对象
来源：http://www.sxryk.cn/163zsyqazxq.html

================================================================================
来源：http://www.sxryk.cn/163ptpuxbcy.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ijyqkwhv.html

Py:   class User: pass
来源：http://www.sxryk.cn/163plnqeutj.html

PHP:  class User {}
来源：http://www.xuanzx.com/163npdhpxya.html

JS:   class User {}
来源：http://www.sxryk.cn/163jwhegrqz.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163uwxlwziw.html

Java: class User {}
来源：http://www.aibaodan.cn/163anzrlvmf.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ysevllfq.html

Ruby: class User; end
来源：http://www.sxryk.cn/163vzibshwi.html

C#:   class User {}
来源：http://www.aibaodan.cn/163mecyocxk.html

[G02] 构造函数
来源：http://www.sxryk.cn/163zaqzzjgh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163irolpxfp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163vqclkgyw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163xsnvvggw.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163tzfpvgar.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163klawyouq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163qcheoatm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163cchftalg.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163wlhyrkam.html

[G03] 实例属性
来源：http://www.sxryk.cn/163iizvovht.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163nrdvbrpd.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163xdwbljap.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163pbdtkznx.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163pdzcrwxn.html

Java: private String name;
来源：http://www.sxryk.cn/163zwltbjhg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163smpscwgj.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163huqyqlnw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163qkimxhjg.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ytkgumtw.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163abtnlfuw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163jbqggocd.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163njsyleyc.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163cvxbqkrw.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163psumpmow.html


<!-- 参考信息 -->
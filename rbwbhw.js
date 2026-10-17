外链999!wailian999！

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163piykifex.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163btzvxtbv.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163qchwgble.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163aokwcqti.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163poyyolhb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163hlpizhdf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163txzdlcil.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mqilbers.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163yzjwxkmh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163idtasoiz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163lltxrleo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163bxjypxfo.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ypcdsotb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163lsglxgzj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163qfkmvkox.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163glandmvt.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tzzubzeg.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163tgksenzi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163baxalnkp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163jqicdrnu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163xentztju.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163rabryqjg.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ihudeexr.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163lotevxku.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163egmgvcmn.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163nasfqzlj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163omrxiorv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163wecxkujz.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163biygsohb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163uuduftux.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163zdbmhhqk.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163qscfxlta.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163yrezpkyg.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qqiflebe.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163slxncasj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163cphtiekj.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163dvrdnodi.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163vxhwijyg.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163hednjbwy.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163igqcwajz.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163qrgfxcyu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163arxnpbus.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163nzdpozdr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ahlflgzu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163xjuzmjsb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163chtyixjd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ocoawnaf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163khtltidn.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163pkjpodjf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163wqtphjml.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163jcwamsqx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163opgodkir.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163llcytvzy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163apehwqap.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163wdftwcni.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163zncudjeg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163atoscuoq.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163uzgjnwpd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163pziqfrte.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163oxcfwvnm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163qogwuvhw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163yqcfhiqr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ubymqlwk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163bckctroh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163zpajzyvs.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163dhtbloqt.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163womzrqfd.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163gtvzngmo.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163alhksjqp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163njzsugrr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nexrbmin.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163tbwwwdxt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163wbvpcgqw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163cumojjvt.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163qxhbpcem.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163olmtiuhs.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163mhchtfcd.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163gxklnqoo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163hnvmxoyl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jwaffsgr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163sdhqcgwc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163wycwytmb.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163wswmqonk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163jrprrfjg.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163scfzntvg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163bpjnqrkp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163wbiwflgm.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wooogygf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qfnrsymj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163xmckbjyv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ijcrpltp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163uxffwpet.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163wxscswkt.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163jatxyulo.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ydlrcdla.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163viocfvtr.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ssivuhrg.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163derczlxd.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163szuworkg.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163qjvdpnqo.html

Ruby: s.lines
来源：http://www.xuanzx.com/163xnlsceyk.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163awjnggcc.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163munmekgi.html

Py:   if not s:
来源：http://www.sxryk.cn/163mgmavbkl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163myoabkye.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163eotjxfej.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163kiagqkmd.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163wgbgtiqs.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163uhinxtpr.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163qsiivnoc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163xsjeckyr.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163qmzdslzw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163vfjroibs.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163xodidmrl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bpuicral.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ntukcikd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ruhwhqgc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163uvoxqcrl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163rgdvmkfp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163kzlozlqu.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163vimjivaa.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ilheocgu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163owlojkpg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163elufffwr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163nbmibxqi.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ohfayolg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163jhurbyyi.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ilyqmwtl.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ecnrsmzl.html

================================================================================
来源：http://www.aibaodan.cn/163xepvszrp.html

F. 文件与目录
来源：http://www.sxryk.cn/163wyqamtzz.html

================================================================================
来源：http://www.aibaodan.cn/163iewrhfga.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163esstfxyi.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163zsubgshn.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163goarizip.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163qklpzlec.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163rfkmuzsp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163herwcobk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163lggjyjnw.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163uwnxaeiu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163aqdrdhes.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163kthrdcks.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163dglfihlp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163oknizqip.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kugjpiqq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vfvslkcj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nyzwaihc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163yzkwemzz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163fgfaueiw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163livegtom.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163rruohxbn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163wlqbfcfu.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163djvrezsg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jlsratle.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163yqhdzrvh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163xnnexhyf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163gcaldtjs.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163knlyelrq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163fgzsvdie.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163kzmcbynz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163yxduumot.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163rqvhjtwm.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163epydjhhg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163lipgwbqf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163jzyoceqc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163oivbplfr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163akmcxmue.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163lmvznruf.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163pqanhpph.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ccimjhiy.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163uumvznsn.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163lofqremv.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fidayedu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163edcxwiyw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163tuoxtbpl.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163okcckooo.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163xbriqvqy.html

[F06] 删除文件
来源：http://www.sxryk.cn/163jidoiwkz.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163hpqbtlqs.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163xbevvsme.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163leumsfff.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hhobjhrz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hhyxssqe.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163ddkljyzd.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163svsrkhjm.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163qfjqdnqx.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163aurptiyh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ibpkdmri.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ymbvlplc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163oiqjbwdj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163pvbgyzsc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163sfkrrelu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163rqwxbmwm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163wwhcqltp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163xmrkkrhr.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ruiwysma.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163eanlevvg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163nazmbnig.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163pjgnhvrj.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163droersbw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fchfropq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163lhpufltj.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163zbhjfrmf.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163hblhygdx.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163vhyybjrf.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163howvchix.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163qxedvpmw.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163zhbdgogw.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163neusepll.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ccjwkacq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163kknpqnyp.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163olcymwyy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163rzqexotq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163cmerxjla.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mlgvnflp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163gsvdjuwu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ohukmcmw.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163lygufukp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163yjgwpooi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163cmbdwibk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cpffryhn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163tlogifgm.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163emifwvhk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163otetguor.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163duhupfwj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lvensbah.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tcobeiim.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ngjbngmm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163vdptfmqp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nshcgmyo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163dtceaoma.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163snsjbctm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163aaunxupu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163oavskwys.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163yqorewjv.html

TS:   // 同上
来源：http://www.sxryk.cn/163afbfxetq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163hryumufw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163hromxsbl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163qxxwljue.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163qrclszmf.html

================================================================================
来源：http://www.sxryk.cn/163vcjebdsv.html

G. 面向对象
来源：http://www.aibaodan.cn/163zbhmfthk.html

================================================================================
来源：http://www.xuanzx.com/163gasxnahg.html

[G01] 定义类
来源：http://www.sxryk.cn/163thyicdpx.html

Py:   class User: pass
来源：http://www.sxryk.cn/163zlekmwdi.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ylnsixcp.html

JS:   class User {}
来源：http://www.xuanzx.com/163wmtlruyi.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163oxjctikb.html

Java: class User {}
来源：http://www.xuanzx.com/163aedmutjn.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ehbutgtt.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163saldjjsv.html

C#:   class User {}
来源：http://www.xuanzx.com/163pzrxdswg.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ujujskcy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163cfkklswn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163gukyszds.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163bmulmlrg.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163wnesjrof.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163erxtwcre.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163amqtfrcl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ovfsvxkq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ititjarh.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163cixkbptb.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163sncxkxve.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163zqwfkmpt.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ubvtqnhe.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ouumystc.html

Java: private String name;
来源：http://www.xuanzx.com/163hqzldyrd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163wnnmkkin.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163xzgxhxpw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163tvudzdrj.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ipahgfvz.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163wbhrvqjc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163faqgyabb.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163mlzqramg.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163dopewczf.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ldtvdqkz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ufagyyzh.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163pihgacgp.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163cfnyotbe.html

[G05] 继承
来源：http://www.aibaodan.cn/163ynxskbsb.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163uzstyymk.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163czvdjwgh.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163dzppchqg.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rafezmbf.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163qqqmbece.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163vocotuei.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163uaznjrgy.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163lhpvatef.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163tkqypjkr.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163iqqbxxhp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163kubqfrxg.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163jyxnrywu.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pjqdyikq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163hkdodqkn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163knbhzxzn.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163xsedpwqo.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163jrxzklmr.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163qvwkbigh.html

Py:   super().greet()
来源：http://www.xuanzx.com/163yqsjggmt.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163qcrgsmbz.html


<!-- 参考信息 -->
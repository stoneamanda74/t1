外链999!wailian999！

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163aktafjvj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163rltlnmwa.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163yubruymo.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gnnjhdtg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163qetizybq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163seetlvgq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163tiaxwxgp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163fbreaooo.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163gwklzsei.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163rkloocir.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163svlgkulx.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163rmfsycbb.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gwkivdse.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ygelorsz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163qnztgspy.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163yvwrwyly.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163hwnnmdkr.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163uspnbvfn.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163jqodpmnu.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163rapjjedq.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163knudqrou.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ixmhqagg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163schkkcfs.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163bkrfceck.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163aginppok.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ipimqilg.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163cjixypoh.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163fzjxthux.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163tusfspwp.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rypsogqy.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vkrgoiss.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163nqqgmdgd.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163qauhwwwa.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163facoanol.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163mgfrsbxh.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163aqdeuzoz.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163weupoetf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163qwipkumq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zztkefjs.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ittabbgc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163tzffmtdj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ohsaqymg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163wuqvxbag.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163uyloiiby.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163alniroqe.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qcjyldmn.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163prtphlcg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163tsmpkkeg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163airtuqwg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163krujncox.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163grgjiffu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ucjovlwc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163sjfyprmm.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163qxaxhkxh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163lraajwbj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163qfnrjaan.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163wdbsffaq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163atqajqvz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163wxotpjtc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163hyjtgxlc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163dxtfnwgz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163jrzruuox.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163zyqjgpkh.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163sxzidssu.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163zvgeqpol.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163vtgcnaru.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163axkkadrj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163yadaotqx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163fwfcngbd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163amholxla.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163uuoldxgp.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163hcejbjzt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163hehhzwzy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163eavuffzu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163nntvkwfp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nlnzeavt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163dotljcxg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163aeafvjms.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163ckhfzqiy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163hfbsdvjo.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163xedcgbjx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163nkciatwa.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163muhufpmt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163breuqqly.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163erravjuw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163mcwgrybm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163bkeealsn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163ebkcafwj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163orubykcy.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163fxteszhl.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163yjqpawpz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163xhexlmin.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163buqorert.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163nszdgutk.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163tsyurykk.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163xpuabtep.html

Ruby: s.lines
来源：http://www.xuanzx.com/163xqnpykjd.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163xaswskzo.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163qabhmovi.html

Py:   if not s:
来源：http://www.xuanzx.com/163bbcxxbyz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163xkuunmhw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163mwahvzcd.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163hjhooqgz.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163xobjwbax.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163libuazsn.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163nhkfzkwc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163aphebfcx.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ujybzmko.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163yvxjlwej.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163wlkgmlfs.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163subkomnm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qwzhnerk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fldyrphg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163rhvybhvc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163zfpqypdo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163qakzfjzv.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ejsreioq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163stjhdjlx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163tevvrsrs.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163olppdepz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163iaggxvji.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163jubifhne.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163phfrvobb.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163pyusjwqa.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163jcuoieuo.html

================================================================================
来源：http://www.xuanzx.com/163eggckdbn.html

F. 文件与目录
来源：http://www.sxryk.cn/163jdpukhjo.html

================================================================================
来源：http://www.aibaodan.cn/163xvckaabx.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163deakibcz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163enyhefgb.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163fmpoazms.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163qadleezy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163mmemmanx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gmvfayzq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163lwpdyplo.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163mvlyxqyc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163hqhdzmjs.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163dsosnefx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163fhlfqztj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163lmhlgzpl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163eryywjvt.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qigtywqs.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163mpsnxokr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163sxeispcc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163vsbeppft.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163aknukded.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163lunykhrs.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163uchxalwa.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163bhqkhwru.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163yvyumnga.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mxrnmyle.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163lmznbgfy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163njtxxgmb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163lxsdeium.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163cmvzmhzs.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163fqqtnsra.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163tgpflevo.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163mnlvxskx.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163uyxrufzl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163atorpmkt.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163eilzrswq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ycncdaao.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163rpoledtj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163lwpzjabu.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ccqajlui.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163lzzosixk.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ulcozmjb.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zylypjry.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nexuwpqy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dlrcprwq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163mjbxndea.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163qpybatbj.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163wffthbqz.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ixiflasj.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163lvkccfgo.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163soifrbyq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ecevbttq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163mrpzhemk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lworwjjj.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163xphebszb.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163kpcyqftl.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ydmpyisd.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ldavoaqk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163woyactad.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163zkhdeseg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hxhpmxvo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qtivugrq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163nnudpkza.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ffbbnetj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163leawojeh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163yyzmfbut.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163atwqmldd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163pseavmnq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163hdaoluqv.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163flwuvnde.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163nnapcswb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163whjtavxc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163muufhnru.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163epiyuxgh.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ndnpntnh.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163cnvyxjtf.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ljuijpcl.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163gwnffrbr.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wvkgrbis.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163wvsdsabh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163trgxgkzm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ufjbiyfr.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163eezspfrf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163dpqmkirs.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163tyvxwjcz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zrfkrlkj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163fxuzlepx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pgdooxge.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163oiwocwpt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ecuygapu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ixfwlynq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lixhtmwg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163xsqjvomi.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163uitisefp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ijogbsxn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ngnkdnbu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bolwjzyw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lndafzql.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163usrdbgqn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163bxnzgeej.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sduxpbxx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ddcqmyss.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163kxpjynto.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163giwbqomw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163dfimudhq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163usefjwmu.html

TS:   // 同上
来源：http://www.sxryk.cn/163chswvjgw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163uwhhbqfj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163bgrlosfx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163pwwozsnq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163zovtalaf.html

================================================================================
来源：http://www.aibaodan.cn/163kpvjghkz.html

G. 面向对象
来源：http://www.aibaodan.cn/163llkbovhs.html

================================================================================
来源：http://www.xuanzx.com/163lpqhefqr.html

[G01] 定义类
来源：http://www.aibaodan.cn/163glkjugub.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163swyvoqmc.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ulcjugzr.html

JS:   class User {}
来源：http://www.xuanzx.com/163mvptodfe.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163bnjkfmdu.html

Java: class User {}
来源：http://www.xuanzx.com/163jdftftyc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163zaamzikh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163mhcxomnb.html

C#:   class User {}
来源：http://www.aibaodan.cn/163sozepzxb.html

[G02] 构造函数
来源：http://www.sxryk.cn/163jehdiegu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163lzrkiqbf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163gvkqmqew.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163lxmfxpgn.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ulrdramg.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163aasnzobw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163cuoaukxv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163tirjtnvq.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163ypybbryw.html

[G03] 实例属性
来源：http://www.xuanzx.com/163vadgedxm.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163rnvloooz.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163piwnthxn.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163hpxsbqig.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163mhsmaech.html

Java: private String name;
来源：http://www.aibaodan.cn/163jssvjuls.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163yhchabst.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163yvojprog.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163wnztjpiw.html

[G04] 定义方法
来源：http://www.xuanzx.com/163subfzysf.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163gzpatjgc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wwmmikzn.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163kgpartir.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163klpzaedt.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163xquklomo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163rhitxvxf.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163fiubmfiv.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163bgimnsvw.html

[G05] 继承
来源：http://www.sxryk.cn/163vnvgkvmr.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163eltkpvch.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163wxogpajr.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163idblzoom.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ciehnkio.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163gahxocvt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163weepayfn.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163gvzemmsg.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163fxbespxo.html

[G06] 重写方法
来源：http://www.xuanzx.com/163tpzqcbog.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163sqzpeejw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fitjgqtm.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163jlfnkwts.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163fmalsglw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163wiulhwfm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163gjumtjzj.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163hlaxmfqg.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ezuprwtu.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163adyjoksk.html

Py:   super().greet()
来源：http://www.sxryk.cn/163vkqreoqd.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ifpnndhd.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163widvtrbt.html

TS:   super.greet();
来源：http://www.xuanzx.com/163nzmkgpvm.html

Java: super.greet();
来源：http://www.xuanzx.com/163qgyfynde.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163kuftwvpf.html


<!-- 参考信息 -->
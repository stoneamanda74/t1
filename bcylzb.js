外链999!wailian999！

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163dekxqmae.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163thgvyvmb.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lyjiwbiq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ofbcmeop.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163wlxdtmev.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163atzrutjz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163fkwmmvqq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ntpifhsm.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163yggvhsap.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163kwqcolki.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163gmgcyeue.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163puzfzhyu.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ssslwyhp.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163qhgypdvx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163vgldbchr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163lmnnmxkk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163lygjrbnb.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163rdmzqwpt.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ulxjqccv.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163djrgazxs.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163vaipaxle.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xbwkpddp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163zycwrkby.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ublyrqyb.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163nrgnuogp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163oxmkohha.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ufjcafiq.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163zavxhdop.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163rzixnhjx.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163axextdvl.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163syadmehq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163iwcptqxl.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163igccgqhs.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163tkgewpjp.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163opwerrfk.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163gouukiuc.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163suhqbvdm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163hbnxhmzg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kolbzkzx.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163pnbvdxhi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163incjalhg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163bdosvkiz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163pwxkesjj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163tgpwloqn.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163xkmpbhjl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163xvibnsyz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163nntrfjwq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163bejiostt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163mrztptie.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163myzrfuyc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163vhpappiy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163zhsfajbi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163lglmyseo.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163pjccnohp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163xslujraa.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163wganevjk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163cjweucyq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ibnjtbjh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163mqhclrcs.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163axkxgzeu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163dglblcxh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163tzaxytit.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163jqmvwvji.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163aklawzun.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163mjckpudh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163plhrhfkp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wuoqjyku.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163lxwhmwik.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163yjygfxwz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ugwnpdxd.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163gwtlluto.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163aheciyoe.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ozfgjcmu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163ykzkvngh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ofsrggsk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163fueglfzh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163mipvfxpq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163kaabxbfw.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163gtxvlotz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163rljgnaqj.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163jiyumqwg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163kyfyytrj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163xxwhijwq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yempmvjr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163eanrgzxn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ilbsssxn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163drpwbzhp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163fgquvkzx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163eredelkn.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163nscseipu.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163qbmatmbi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163wvvgslph.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163etepciqu.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rsmwdxtv.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163xpqhxkuw.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163upiutaby.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163rowxcjff.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163hdqsbxpn.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163oefzkgsq.html

Py:   if not s:
来源：http://www.aibaodan.cn/163aaxsgxfr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163debjlfvg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163vnjrklti.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163gmupwxvl.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163glezxpzq.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163zguoeryk.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163rmdpjpkh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163kqpupezq.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163myrdvdoe.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ubdpbjys.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ygnjfpze.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uapzpgab.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hsyroxyj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163syijjtcx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163bsgwjuel.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163fojbirwd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163guwjctua.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163isxnpcql.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ttdekhvv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mqaffdtg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163snhuxvxv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mzmpdhxa.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163wuewzqye.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163crovotgy.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163tqjpxkhu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163rnpkwguy.html

================================================================================
来源：http://www.xuanzx.com/163xbhayszf.html

F. 文件与目录
来源：http://www.aibaodan.cn/163yeftjrye.html

================================================================================
来源：http://www.sxryk.cn/163hhszlffb.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ftvrepun.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163wpnmvvnv.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163vpvhodbo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163tqvfqwxk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163hjgnmnhb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163aavucbsr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163auvwkfum.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163wzmhpumw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163rslmygym.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163mbpewrtj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163aizmlapi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ryhuwhoj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163mldhtali.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jlvblwmg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jxhktiuk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163wpuymcsj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163zmtfagdx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163guwkwcgw.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163dhinnhwc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163jkijlprm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163jsvcstbd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ecifbibg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rvxqjwep.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163euocwyxo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163pkaylbgy.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163xwgtffwv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163phckajcx.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163dchdcmes.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163yupezzbv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163keqkxjkv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hcfgrjpl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163modjkuji.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163dveddqst.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163njbopmco.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163lfdmywpp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163muyqensp.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163oouqvlur.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163foimkyhk.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163gmxdynhj.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163toyifoay.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vffdfxkh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ojguddqk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163gemnhxwo.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163nqfcbxia.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163tqquvugx.html

[F06] 删除文件
来源：http://www.sxryk.cn/163aichmsnh.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163piwvqpyf.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163mjtdzlep.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163raebvkor.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jlkmnrvo.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rcypdumk.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163oeraiglp.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163dhzedxur.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163nuxkpxlq.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163tqrspzna.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163nxlmdapr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163socfgqnj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rfcfmwih.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163yxceuypq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163lrpcosjs.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163kmcacisi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163gmsmhrom.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163bhajmkrh.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163udwqnrfh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ibeusspd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163doawwryw.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hsrabdgm.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163smlwdohv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vyyoxpny.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ldcmdkeb.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163uzljhwpf.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163wvntvhyo.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163pszztubj.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163gevxfoag.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163bkfpypdg.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vjhzrasb.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163sesmmqxd.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zczsbchh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163bspeuayf.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163dexfdezx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163gyskjkjn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163txiqgefl.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163aeocekju.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163vmuhccab.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xzjjfycm.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163jtsztjwq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163uomiccrj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163jbbdjapa.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xrirmcwo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ipucqcey.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163diarqzfl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163boprudmf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163oxgkadbl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qgptqukj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163erkxeden.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163bafgmrna.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163edewwnvh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gjakkdyx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163hyrifzcg.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163rjbgskcg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163igybogvv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163jjjittxz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163mgecfksp.html

TS:   // 同上
来源：http://www.xuanzx.com/163vhxzicsk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ahcuzelb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163yfkzfrgz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163dsyxxbbz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163sgqjnjir.html

================================================================================
来源：http://www.aibaodan.cn/163gtfcenxs.html

G. 面向对象
来源：http://www.xuanzx.com/163ixovuinj.html

================================================================================
来源：http://www.sxryk.cn/163mgeotygk.html

[G01] 定义类
来源：http://www.aibaodan.cn/163lquynyum.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163lwonudxg.html

PHP:  class User {}
来源：http://www.sxryk.cn/163asgrjgks.html

JS:   class User {}
来源：http://www.sxryk.cn/163oxhlignu.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163elqwxmji.html

Java: class User {}
来源：http://www.sxryk.cn/163tvabimsb.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163bwmwplzo.html

Ruby: class User; end
来源：http://www.xuanzx.com/163wcxqcpzs.html

C#:   class User {}
来源：http://www.aibaodan.cn/163pxoithmp.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163tcswmmpe.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163shjqhhhl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163tmpejeuq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163rzfgxvfu.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163gtrrvbip.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163hlajapzz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163uaapehou.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163vcoexfje.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163lxezsxiz.html

[G03] 实例属性
来源：http://www.sxryk.cn/163qeakuuzi.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163qkbuxfhs.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163hbojvwte.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163cltcivmn.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163bnwvihmw.html

Java: private String name;
来源：http://www.aibaodan.cn/163trmfoxtw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163egkenxzz.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163fvkxvubf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163zwledkpf.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163eajgdvxd.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163oaqwrcbl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163pzdluprt.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163flkmkrnv.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163zvmwbkpj.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163rfxkrqpz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163xplmohnf.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163difbkiga.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163wpircwce.html

[G05] 继承
来源：http://www.aibaodan.cn/163infnqbor.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163hhqcdnvm.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163nnlexsxx.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jzlfling.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vjneskqa.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163eahtqvvx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163hsdrgzpk.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163zjinkigx.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ifgbigpa.html

[G06] 重写方法
来源：http://www.xuanzx.com/163iahrnkoz.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163nwysoobp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ozgxhlkv.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163npjrejnd.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nkgllrsa.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163uaqvuplm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163qcmobuar.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163heabkzrd.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163xvzjepoc.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163rmyvmygy.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ogozcvvo.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163gavovuwp.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ruzdnhpm.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ykvagqlw.html

Java: super.greet();
来源：http://www.aibaodan.cn/163veyxjxno.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163sxpsefnb.html


<!-- 参考信息 -->
外链999!wailian999！

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163nienvpde.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163wsefkwxa.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163gxxdmqiz.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163pgrttqgv.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163yfymokvz.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163xbpummcj.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163xmapmkmb.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163wjnmyyfe.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163xvhhtkxq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163dulitply.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163smqvhrmw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163oyriueet.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ygbgcfkx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163kwjzyweu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163krrzonys.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ybrfrfge.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163huaaejqd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ymxtgljw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163tpyhjdpy.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dlcatstd.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163brofjdix.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163uprjxwuf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163behxrqep.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163menrtivk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163sorlfjbl.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163zphpozwj.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163wdvyjvef.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163buzewenk.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gefkcvbt.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163eylnsivk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163mvppkbqv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ogfmaaqx.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163riqcgddj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163vtmxbxmk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163nmvydrdc.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ipxaeqbu.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ocwzxruh.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jbrzetxc.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163xnpxcgpd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163flfxxgyw.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163pwzehukw.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163shuzapkw.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163qdjdrhtw.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163jclylktr.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163bujtgkjt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163xobeumhp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163pmfhfvpo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163nzgqdmxu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163snrirmvi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163znxtwavu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163wqigtupl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163zqzzbcsn.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163tfvxgiuz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163pqdfvyxh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163nlnwfbzw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163itduqhtk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163vltcvzyl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163flkjrjvs.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163kvbwmnoe.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163rwuwwkqu.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163flzwqpla.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163oecoplcu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163oqvbrlmu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163oxkfwjzn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163gfeypwxh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163slsqxxls.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163deywvihc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163lvdiyruv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163yrezaxrx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163jredulyd.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163nkcalzhv.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163oxajqefk.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163qitcdcds.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mtkkysuk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ofslmkup.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163tqinnzgz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163fabkhpbn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ayuxraap.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163aqgpatqt.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163wcjqdqsq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163bbwkuqtu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163jwdjtmvp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163enwmwvra.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163dclmxzld.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163mcusynrs.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163nujuqwfr.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163miwnjuuo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163ygdnxfdb.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163pbrhfull.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163scrhrpoi.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ywycblvs.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163lckyukap.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163cudbsike.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163qaqjfqji.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163irmmvspq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163sdrasicj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ptflkbdf.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163rccdkpic.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163stxysqqk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163zlinndwa.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fvbummem.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vakfftze.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ktbnjbxr.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163utmzkrbs.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163vqbykpxo.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163dvrkcfyt.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163tduwqpxt.html

Py:   if not s:
来源：http://www.aibaodan.cn/163yvzoayqr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163astjhwrw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163tazdlrcm.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163datefrkv.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163jtemarxt.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163sqerhltw.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163hirbgilp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163zwvytgdo.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163lnjfzbgj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163jhntddag.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163xnxzpgqa.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bdsvpxoz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gthuvvae.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uvavepnc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163kawgkiox.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163symvachh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163zispxolu.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163wfbsrlgb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163aeerklon.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163tdxvspop.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wjnlcpbl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163quowbckt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163cuvahesf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163merkzoym.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ixnsrebk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163efpoptts.html

================================================================================
来源：http://www.sxryk.cn/163adwebgzv.html

F. 文件与目录
来源：http://www.aibaodan.cn/163esvrkzsf.html

================================================================================
来源：http://www.aibaodan.cn/163dlefesbh.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163iypccfsd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163otisksmq.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163imcxeoom.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163zsvzkttm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163yuywxhnr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jsapoxmf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163gqxamlfq.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163llfewtbp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163wuntmsue.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163hnbeqyiz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163cbgjdjgi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163kclbogva.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ylqbtouf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163pwtgpplp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163tefkkabr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163zqilgcpn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163plihsulo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163vkmhqdyx.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163eijkjwfx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ouynmdes.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163crnjxkmc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163dsvqpmbd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163evrpaffg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163krzdawrk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163jktvzxrm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163uzlxnzwn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163xjwlaxtu.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163famvibnq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163eyrekurn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163spodksif.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ajprcsay.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163licqphnu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163sbhsfgoy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163znnegxco.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163vscrskzd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163tzzwhrvq.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163gkdtptrh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163zwuvndnq.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ckrjdjpj.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163acngtbsu.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163uopkbnmw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hzbcccwo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163kbiimrtm.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163cbixtoch.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163cbuthvwd.html

[F06] 删除文件
来源：http://www.xuanzx.com/163fpvaquxj.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163wcqfhgmc.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ddoxllyb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163cmlrrxqu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qbujsmgj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163sdgybihw.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163kbuvaeyo.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163aovzxwpa.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163limmvmbo.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163nnuzueds.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163fkdaqgbw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163cmrzugsh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ehlwsaev.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163hnnokikn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163cuiwpxzo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163fdhznjnl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163rovwssmv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163tjxmrvff.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163dsztnyej.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163hjeybhhf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163gdsmbqgu.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jmfvehgm.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163mbyryrrd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163uwgysjbc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163lpwdckxs.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163zwmrtjbt.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163zxogtxir.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ldunwtlm.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163vtnmjiof.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163jozbvtqu.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163tiqwdglp.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163cmninoef.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ffbrqprj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163avolitnj.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163erecfqsm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163srrwxfmw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163xlynlljd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mfexqqbi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163qszioiod.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dfruangl.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ctkfwcli.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ukjdqjqm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163mfzflcal.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lwrjrzpi.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ysqikzmr.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163hkgpumac.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jkrptrvh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163dfwsrgnt.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wfzmczib.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xzdkopns.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163gicrjmhq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163sagbbdte.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hwsdtcnw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163luexgqid.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163tohrzgoe.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163lttashwp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163uwoedcxx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163jpnrnpum.html

TS:   // 同上
来源：http://www.sxryk.cn/163punmcpyz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163nqvycqay.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ufbzavro.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163zovfpkcg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163copyieae.html

================================================================================
来源：http://www.xuanzx.com/163krmifbli.html

G. 面向对象
来源：http://www.aibaodan.cn/163jwrrzwxp.html

================================================================================
来源：http://www.aibaodan.cn/163xggzmmjs.html

[G01] 定义类
来源：http://www.sxryk.cn/163stcoojaj.html

Py:   class User: pass
来源：http://www.xuanzx.com/163lghgafyt.html

PHP:  class User {}
来源：http://www.sxryk.cn/163hzrbfwkk.html

JS:   class User {}
来源：http://www.xuanzx.com/163bsduwopg.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163bkgqhloj.html

Java: class User {}
来源：http://www.sxryk.cn/163fbsxzrzo.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163uvousqcm.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163yqqlmklu.html

C#:   class User {}
来源：http://www.xuanzx.com/163hkfvmnax.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163yoofwpsz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163auzxmjoi.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163pigzrhaa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ttzhtpcs.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163rmzpvtce.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163mkhklznb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ezwzvhnc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163mmkckjiu.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163fkcptrcd.html

[G03] 实例属性
来源：http://www.xuanzx.com/163slyfhfyi.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163pzxhifit.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163qhmyawha.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163dctavkkm.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163eedgeshg.html

Java: private String name;
来源：http://www.aibaodan.cn/163jvyeixfy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163trjgitpg.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163oxcequne.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163gmjooikn.html

[G04] 定义方法
来源：http://www.xuanzx.com/163fhufjone.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163scikriep.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163fldbpdmf.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ogkuyavq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163qlqhskrz.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163iemvpvzt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163clicidti.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163iexhcjwt.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ihiaiqro.html

[G05] 继承
来源：http://www.sxryk.cn/163vaehuijg.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163dolkpree.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163vmahxslf.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ulqrokji.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zopmgezw.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163wwjoaler.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163uofeczoe.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163lrnnzvmb.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163lvscmfcu.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ejjnexpn.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163mxjewhnf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dloksvoi.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ikzlnovt.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163hyubtlyx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163htqcvqxu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163qasrrpqg.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163zndmfzkc.html


<!-- 参考信息 -->
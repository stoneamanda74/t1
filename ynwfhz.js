外链999!wailian999！

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163zdausdfv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163fjeipxff.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ghponilc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163gcnclpbo.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163mndglbno.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ztjabzxg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163cdyhibvu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163tiruasmb.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163wbomptcs.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163akqirlux.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163vqbtbldl.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163oobeepwf.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qbyakmvt.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163zoghvmmp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ktlqqdyf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163vtsgirvh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163atjtobeq.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163nqcmzvxa.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163nfjlltao.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163yykteiow.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163tgaqwebn.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vsipzlhk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163eqxxtqob.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163oucyivxn.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163rfoyolvq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163lvogotdo.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ejgfshrr.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163vcfopkkq.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163axgopvwd.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fxznmzth.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zdpwrrgp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163celvhkfc.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163jbzctwnu.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163zshowqjo.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163jtuchqin.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163yxcbhdxv.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163pragkglg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163obefprnw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163crtbyddg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163eprqvvol.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163brmlvneg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163yzaupmgb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163qkrjzuan.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163dpcjnarc.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ezufmxiw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ggcvackd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163nbcpxlzs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163gmeglcdd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163dhzgkrym.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163nkqbrppl.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163nsxpsdau.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163giizxsok.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163yhghnsfv.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163fscuozlw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163dzexnnor.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163xwhygrbi.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163surwakwg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163uhgulnkh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163blxeuekd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163etlbhwpb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163cwljvuel.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163vciiwljw.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163xxjrribq.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163kshxcivi.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163gcjkgedn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163auqeyttp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163eqwyasfe.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163jwsumrpi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163wxiezmsp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ingsmppv.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163jczxltyp.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163vcrodqrn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163lgdllphs.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163daosurqi.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wbjvuwwa.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nnktisnu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163sikvhdof.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163okbmlmjk.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163twvqshqu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163gtmsejam.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163klvnyfdj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163xsgtpprb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163egnjqygq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163pmmwtxej.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163fsspukwl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163yclhguzj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163bfqvhkki.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163tdquggea.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163oxiuaozh.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163bxqjoafg.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ygfqprrf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163wuecebab.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163evowvawy.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163scefaosa.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163vmamdvou.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163uusrcydk.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ugztoftn.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163diknjupz.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163qqvpjvzg.html

Py:   if not s:
来源：http://www.sxryk.cn/163aauiuruh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ddrsycet.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163guxwxrws.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163yaeetjfm.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163scxzgyas.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163vmmgxqmg.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163uvpnsaug.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163rotqbobx.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163rplnwjqr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163hcmdqvnj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163oxedzirp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xuikqiau.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qcekmuho.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ddvbiamt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163rmpzjcsb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163wehjvwly.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ksjwnwuw.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163lwqsykcz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163hadifgwq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qwaoyjvo.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163piehtlhk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ehjguasv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163sytcepkq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163aymsaxrf.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163enjtiuko.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163xtrnjxjd.html

================================================================================
来源：http://www.sxryk.cn/163lvojyggz.html

F. 文件与目录
来源：http://www.xuanzx.com/163pjhpzqky.html

================================================================================
来源：http://www.aibaodan.cn/163fibywoht.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ixwnttzn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163wbfobuqk.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163qkbhtjxt.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163rtybiguc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163wdderrnb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vhrwicjf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163htkazidm.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163qispfcoe.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163gxizzdaa.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163bvuhiwli.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163uruuzjmd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163qhhufhzo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163kumampky.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yjwosdmw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nsjohuwy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163cjiyhxvl.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163sljxmgdw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163pieywzov.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163qdlfpazm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163jjgnjard.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163srmuxzrz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qnjmkdnd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163iqacnkio.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163pqyzpmgy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163nxjrwqsh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163jhuangxf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163brbrxqxx.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163tydwahms.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163bxybisjs.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163rniizvys.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jslqhaef.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ahanvokm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163rxbojhlz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163aagibnay.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163pbelmnof.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163hbcwsemf.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163eqgwpmbv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163vocdvhyg.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163eiswbqeu.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lltsoumm.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163kisfqtan.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lgryuewl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163evckzizl.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163xuletmwv.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163chnblidk.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163zakvjejp.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163bjavaoaf.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163wkbfdoyq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163nagkbiuw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163qkqavjzz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wsblklhf.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163iehrrxqx.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163zpfsxqry.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163uzoetikk.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163itukuswn.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163zmrxizcq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ddxalsgg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163afspqeum.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163trqwxqfe.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163gjeatewn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163whlrhnpe.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163pgrudbfj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163lacuqxmd.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163jsvfiakw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163wtuqhqkx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163tuqtcklj.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gaiwxwfg.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pslaiikn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163knaxikmd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163yrfrhipp.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ehrlwltl.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163eymmcimw.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163nuzdvsmo.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163pweumtod.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163hjyspvnl.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163gsbaoskt.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vsilreyp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nbhzslyt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163yakuaitv.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163aoqkiqfx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163xsqegicy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163oudfcnru.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pfpyqwlu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163otwgesdb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pxdjdnpg.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ahstjlod.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ylemgthc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163gpiystlx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lxaymmgp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163pjxiiksd.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163qpprtvvl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wvovenoz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163arbegtde.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hksclped.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fawwtecc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163mrttcwdi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ifniyrec.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163aptrcdzt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163loltgfca.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163sexwzrav.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163rqmlrbud.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163rucqckxr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163jxjohxjv.html

TS:   // 同上
来源：http://www.aibaodan.cn/163fhujtjrv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163oycmwsvu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163cuzxpife.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163hwaivjxg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163jcrbhjen.html

================================================================================
来源：http://www.xuanzx.com/163gfsxiabm.html

G. 面向对象
来源：http://www.xuanzx.com/163aupngtcs.html

================================================================================
来源：http://www.aibaodan.cn/163ajluuhjs.html

[G01] 定义类
来源：http://www.xuanzx.com/163nctfyvzm.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163fukujrrn.html

PHP:  class User {}
来源：http://www.sxryk.cn/163kudzrsoz.html

JS:   class User {}
来源：http://www.aibaodan.cn/163uqouwnkx.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163vtuqpkdi.html

Java: class User {}
来源：http://www.aibaodan.cn/163vxslbqsd.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163lscakyci.html

Ruby: class User; end
来源：http://www.xuanzx.com/163hwlxijnn.html

C#:   class User {}
来源：http://www.sxryk.cn/163jckmnyun.html

[G02] 构造函数
来源：http://www.sxryk.cn/163gluefovq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163zfzgkhua.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163kivzxnzs.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163bjnguyfw.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163tytwgrte.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163prcouikw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163nkzxcubi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163hjmwjlbn.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ourytgzi.html

[G03] 实例属性
来源：http://www.sxryk.cn/163yebaygru.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163nmsymsxy.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163afbdpmez.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163cpokgpnh.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163twqoffbx.html

Java: private String name;
来源：http://www.aibaodan.cn/163uklwhikl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163awskjqrg.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163abkktksr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163dqalxcyj.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163bcyakokr.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wxqpvezi.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ummwuogo.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163scbrjwkq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163nhghzluj.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ejtijzcp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163notvglyg.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163oatjjzxy.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163hlfrlsxc.html

[G05] 继承
来源：http://www.aibaodan.cn/163lubvlyrb.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163bfcuaipk.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163zfajepug.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ifblsloo.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zqtdeqcn.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163teqjdqtg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163dxwlgzmq.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163wkovnokq.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163mivzzhne.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163uezqywtb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163wujhhirw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ruygxglz.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163hiaoeljp.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163muekadzs.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163aagkbxil.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163bagbrhex.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163bihfxclw.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163xfgatwuc.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163dlykhzjn.html

Py:   super().greet()
来源：http://www.xuanzx.com/163jcftqjfm.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163jvgqblmr.html

JS:   super.greet();
来源：http://www.sxryk.cn/163iwsgetce.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163gycxzfll.html

Java: super.greet();
来源：http://www.xuanzx.com/163dysvngya.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163tncvrnoh.html


<!-- 参考信息 -->
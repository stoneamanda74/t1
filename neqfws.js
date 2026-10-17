外链999!wailian999！

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163nbrgjskl.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ljwytchy.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163xfusflpq.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ggwmpwlo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163xsdyylbo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163kdmoxqng.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jeiibrqs.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fuqafszi.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163rvcmhhgw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163uxuunkhz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163vylzfkfu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163rqbxlxlm.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163yjxxjgft.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163skpovrxr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163xibjoura.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163otcwnavm.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vvzcpjsv.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163shlkzmky.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163hlozenxf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163chwhhwec.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163uzlalsbz.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ntfhvtgd.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163piegumbm.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163nnjhdexc.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jwjxzbek.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wpyqonvo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163cvncafbs.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163fcvyrmjx.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163fjtqlmqp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163afcqaicn.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ggfatqkx.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163qqkapcyh.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163syqpxaqg.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163peknwsbk.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163aguikzdh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163rrnpkvkw.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ujpzbzcw.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ttamzefe.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163bvlcwurq.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163vupyqwff.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163plheyugv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163cjneicvd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163nzpkddrm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jxjvzzfl.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163qaceuewl.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163balycnkd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163jejhqkag.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163yhozpbho.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163uvppepxo.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163hkjkbmtf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163rguejuex.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163zqgrgdzb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163moidvylw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163mhiygqcw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163jtcbyktl.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163pzvyihtr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163oaohwmvt.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163hecjolhu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163dkwcusez.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163plexsbed.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163quvjclyr.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163poxyvelu.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163gqfsrvuf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163nbeuayhm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163yaateehg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163didhliog.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163szjfkutb.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163glkxzwxi.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163eiiamvqn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163opyslvli.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163leojylkq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163oychndac.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163zgmicgjw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163tpsxlpuj.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163eikfyvnb.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ldwipllz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163dpszfevy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163vsdoobii.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ybpdacfl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163eqmhbmnw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163gsatovwz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163iycpicch.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163yksdsatq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163yqbaigdc.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163qkbjhpcv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163qwibftae.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163lzjfvoxb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yojikgul.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163wkuryevj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163sjwhdrca.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163miuioboa.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ntyrrdrk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163vxiawkmd.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163udreguoo.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163vjvqjyzg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163hogyemzf.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vyigysai.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jmxapics.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163uifmebuq.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163elbwavmm.html

Ruby: s.lines
来源：http://www.xuanzx.com/163nwzgbrhf.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163juinmawm.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163fdyfzkld.html

Py:   if not s:
来源：http://www.sxryk.cn/163wadcdjcj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163xlgmttzb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163tbfmyjpt.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163wudnbbvx.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163iixncqyd.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163tzzqwokj.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ynlkcqod.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163zckmticf.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163lghcovof.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163dfexqafh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163xyvumfhz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tqolcmav.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jbmilmru.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zlratkil.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163lkwcsumf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163kxitqpxv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ewrafvda.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ozjldjnw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163tpsynywg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bobwihfd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163fjjzsiqa.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163aphqtolc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163pfxbvety.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ascpixxs.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163kxjhshzh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163fhwoekbe.html

================================================================================
来源：http://www.xuanzx.com/163jnhkuuhz.html

F. 文件与目录
来源：http://www.aibaodan.cn/163qtkybaqd.html

================================================================================
来源：http://www.aibaodan.cn/163gukizfvx.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163sfsxoiop.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163uekpzupz.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163wjxsewvc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163nbbepoqe.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163eiiygxna.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rvzgjznd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163eihenizf.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163nlujigyc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163nfdgdiyd.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163mvzxfuug.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163agtmeakt.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163asjreblf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163adbdbzbh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qrqwyavz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xahwhvca.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163imownzui.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163tdjzhtxf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163wdlhdtzu.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163vkmjcfxz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163myloudog.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163xopjfzrz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vtaegatk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163voddegge.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163xcuhdwlv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163vjwccusq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163vbmharol.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163zsxdarkx.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163jkafefqx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163tghgzhnl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163niaystic.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163airntien.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vjbldstk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163bxrjgaqp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163sauxzrlj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163lvygtmpf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163cssiowxd.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163mwrktylh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163zkhqibvk.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163jbmwygvi.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mzjgphnr.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163seyimzzy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163aqflakqd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163khseoffb.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163dsnsftfo.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163sitdvtvk.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163doptbplw.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163mqjjawjg.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163pbcqneox.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jpywnzrm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163uxpzkpkb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tvxjzdrz.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163dvfyzxod.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163jdymikwi.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163yvsxbibe.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163rrdibbjz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163dvgqhlac.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163dkqepqxc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163pwpxmxkc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163oelzaedk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163vfhibowo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163fdyytceb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163emvhkrua.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ovkdxgjh.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163mgxjsdxr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163fwxkxeln.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163sadrwbsd.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ymmcdcyi.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mzsaaikw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qgnfznln.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163hjijcnuu.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163erpdetlk.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163hmcfdlfv.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163boqsgobq.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163orxgncrv.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163vqdtigkp.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163drhatvob.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163zhlarmps.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ktjjbnel.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163xnxoitez.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163vfxvxpsz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163wtfbpadv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163gbgtwbdc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rvdinsqr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163gzrlqbiu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163todpezxl.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163efheqplu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163fjipmxvp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163pskobiqx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qmzyaobw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163fhfukmac.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163kprmfgbl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sponpxrj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163pcerdboz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wleofzfc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fcizmhqi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163dzglsrsb.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163jwbodjqn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nnxzihtp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163zqezqznq.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163jmcenjam.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163imyvuvug.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163uhektvlo.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163subcvkxl.html

TS:   // 同上
来源：http://www.aibaodan.cn/163jlflrvtp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163noxufjkc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ikpiavdw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163zarauvma.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163joapqhrc.html

================================================================================
来源：http://www.sxryk.cn/163trmnekva.html

G. 面向对象
来源：http://www.sxryk.cn/163sguxdqgw.html

================================================================================
来源：http://www.sxryk.cn/163ltuebuls.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ihduvwln.html

Py:   class User: pass
来源：http://www.xuanzx.com/163lchskmlz.html

PHP:  class User {}
来源：http://www.xuanzx.com/163kkidfbzp.html

JS:   class User {}
来源：http://www.sxryk.cn/163kkgqptlk.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163zebxehaj.html

Java: class User {}
来源：http://www.xuanzx.com/163lwmzdzja.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163vxtkcxto.html

Ruby: class User; end
来源：http://www.xuanzx.com/163agneayuy.html

C#:   class User {}
来源：http://www.xuanzx.com/163xpsmfrtu.html

[G02] 构造函数
来源：http://www.xuanzx.com/163akspezbb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163roqbquht.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163xrauzfba.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163nwsjndgs.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163toqiaapf.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163bjpcbsdw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163njatnczj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163wahnltor.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163jogmewnw.html

[G03] 实例属性
来源：http://www.sxryk.cn/163eqzcpxkx.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163lxvkfyix.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163mipssyak.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163qmqrujvh.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163xhyrlbhb.html

Java: private String name;
来源：http://www.xuanzx.com/163hizvoclv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163lftiluag.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163cixfttlk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163fpdsdhzf.html

[G04] 定义方法
来源：http://www.xuanzx.com/163hkptkcbg.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163iknrmjam.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163sylfzeoc.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163izqcrcyn.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163vtpisnkc.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163romjcrxt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163eiyldzfc.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ipxzvedz.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163imjcfxdm.html

[G05] 继承
来源：http://www.aibaodan.cn/163dgkayhho.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ejkbxyxu.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163qlersoiz.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163pjduvzfe.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163upzkqpel.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163hczwashk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163wxqxtkqx.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163rwbwwewb.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163lmclweaz.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ovxcepoa.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163qvyhfkpg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163rcvjlmdu.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163hcbfymia.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ignptldy.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163hknixnwx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163yvdezscc.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163mcdfugko.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163bzuufbns.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163uwdaijgu.html

Py:   super().greet()
来源：http://www.xuanzx.com/163hwwjalex.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163fpugyimj.html


<!-- 参考信息 -->
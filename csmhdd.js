外链999!wailian999！

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hqtuiumk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ccjonuea.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163esilyksv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163hbiosqkp.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163rvniqdmg.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163habhgenx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163khrbapri.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163eazodrce.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163oziaixwh.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163zgnbjscx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163yldtesny.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163empiwvuv.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163qsbtnuit.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163gveeszeh.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163pvisrsjx.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163vpgkflgy.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ewmuskep.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163alhgxnju.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163nzrsxyzu.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163rqeuoeuz.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163amchlaip.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163tfaogekg.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163rjwwtnxl.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163qmkjansv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163osxquzes.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163hrlohjtd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163physnril.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163odzyzkzd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163uedjuzjx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163jfevootq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163sgotlxho.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163fndimmni.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163reztwqio.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163xrvampcg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163zoeaweut.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ruqaahxu.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163pmvouboe.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163xeoirguc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163shdzovhg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163svkesjqk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163naovilxa.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163tupwtzjd.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163kpmoiwgs.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163gazdpfvx.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hyaeknsh.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zyzflbjm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163cnrnefms.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163akskcrxa.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163dejyxqwl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163euodnhvi.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ggkxvqiy.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163zmjkwaat.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163nzejyyxu.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163retlaltr.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163tkvqswzu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163fjgidwck.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163dvyevdst.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163wxqfiicx.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163lbresbtf.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163troihumg.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163zjocatsw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ykcakbua.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163uyixkudr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hhmigmnl.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ljkoxfcb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163drtunrpw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163edfsqycs.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163grztcdgw.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163msylboja.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163wozqxflg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163llafdrlv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163spfyeysk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163kbzoxzig.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163lnxuazma.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163sufbcrnh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163pqomfnat.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163fouxcces.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163hhaidhpa.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163hqafjlrs.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163shkkwdny.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163mjgfwzyb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163utfepqwz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163mxpncwac.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163rnmeoycr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163wrbcsbaw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163mmsugfzg.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163lbxshimn.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163xokudzpd.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163dxbcuqyh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zqubdhob.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163cdfrznxb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163ikiyyder.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163gyaobwyr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163jhkywslf.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163nrrxtpsd.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163jqberqbh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163izmnzsvh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163mmzgturx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163izfgxgqv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rjrfuveu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163mvhrbdgn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163lbdviwcn.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163dlcnnafm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163uxvpvvig.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ofkiemro.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163vfzothwq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163cpamocun.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163uynpfokl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ccpvtsah.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163crszyyrx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ubizcams.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163qkhleizy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163mhpelxgy.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163tdkvcwwh.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163eivntgkx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163kvhhnyuh.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163yvnwdhpt.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mbzzvlyn.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163knguvurb.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163vkbfyurk.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ecvowbsi.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163rknozxtf.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163sofhomyn.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ndluykex.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163rlausxzj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ccvtvtlq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163cqslsway.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163fepnwfhe.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163khgpoodq.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163mimplebi.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163eruqadyf.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163lbnpnjfc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163wywlrywy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163xhejcetk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gsemxzkv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ltqdensw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rvfdfrbb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163dffznmxb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163jpjdvpik.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163pviyrfbx.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163cikesomh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163jvjytgxt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hlyskzov.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wehswcbg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163fbijaevb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163uqdxwhdw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163xbmfffzt.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163jdljckwc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ynudyadf.html

================================================================================
来源：http://www.aibaodan.cn/163lbxpuzly.html

F. 文件与目录
来源：http://www.aibaodan.cn/163rcvipryn.html

================================================================================
来源：http://www.sxryk.cn/163huuowiox.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163lfpwlhvl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163rctqapxx.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163refggpqn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ztmmpucg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ccbywxae.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163klcdysan.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ynodyhzm.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163kancllev.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163hfnwopky.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ozawvxgh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163hhexwebj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163dlcnphyh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xucvtydd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163uvkzxgna.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163oazmneaq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163shzhsxrh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163jcvvfpov.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163hlvlkvhs.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163qzxnvlhw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163sxfeskty.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163iiujgdfg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163idhgyzks.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fqmpqzmg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163sogflkkl.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163alulcdib.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163anmsvgnm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163tuvdzojv.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163mgqnctok.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163yjvrxqeu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ygawqlrw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163yblwandu.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mjudswkw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163hgupwmwm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163mjbtfytp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163tqpewxcp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163zevfrfjc.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163eziheszn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163tfonbrlc.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ylpzinyq.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163skeadhwd.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163bageaymk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163azamlnhg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163bquszahq.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163dvprwpef.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ndmbdkee.html

[F06] 删除文件
来源：http://www.sxryk.cn/163eshqxfeh.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163zbxwlkxu.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163caugchya.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zjauingv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163bwwdfhkj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163phvyymim.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ndvftqub.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163prkusvkg.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163jpwtdssb.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163fytackhi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163spafoxxr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ermwrpdi.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163tscpityq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163orglcejz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163puniaiut.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163afyotyph.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163slgxvvev.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163pixtwlce.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163qzcrkmua.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ddkywqds.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163hbyfycat.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163wzhigegf.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pdqqzegi.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163edswzmca.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163oezhmnso.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163tkpdyxdc.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163tzygdovq.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ebbmmvkw.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163wosfefwn.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163iqsbyzwl.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163kinmehho.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163bqtjusrv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163thuxawgv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163qyfgokic.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163mvswqare.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163vgzrihag.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163knydhzxw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nscxwvtq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163llnuphfh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163myyqtnfr.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163nwhpkery.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163oiyjiqpz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163bcfinlzi.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jxkasrxj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163bqhbioyt.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163sgdvebfc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mirvvdlv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163zqkmyhjx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kngqsaur.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bbovcouz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163yvlocavy.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163hoxijrgv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163oachvmre.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163icyvufqx.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163yugarjfg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163edvvokuf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ekbqcubz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163htztiodl.html

TS:   // 同上
来源：http://www.aibaodan.cn/163higsirce.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163kmiyzalh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163syrxvwjg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163fiqtizuc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163talzkqok.html

================================================================================
来源：http://www.sxryk.cn/163tklvbwxc.html

G. 面向对象
来源：http://www.sxryk.cn/163zeakpmfd.html

================================================================================
来源：http://www.xuanzx.com/163cdjxbyrb.html

[G01] 定义类
来源：http://www.xuanzx.com/163uhjytmvi.html

Py:   class User: pass
来源：http://www.sxryk.cn/163nywmbmfe.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163aqbrhqhf.html

JS:   class User {}
来源：http://www.sxryk.cn/163paxandzi.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163rynfwgjn.html

Java: class User {}
来源：http://www.xuanzx.com/163uwfqxnam.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163owfwisdm.html

Ruby: class User; end
来源：http://www.xuanzx.com/163fbtukutq.html

C#:   class User {}
来源：http://www.sxryk.cn/163bmheyzin.html

[G02] 构造函数
来源：http://www.sxryk.cn/163wsqqsldw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163dnjlclxn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ijvadebk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163cquiljws.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163kqticqua.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163zbhitcov.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163gybfsnmf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163rwnkkxng.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163grwyjcyn.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163zwalfqym.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163enzascpf.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163tgdmqejx.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163hqmoadat.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vbekqzcd.html

Java: private String name;
来源：http://www.xuanzx.com/163luirkugr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163jqrabawa.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163nhlgysuf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163evnuibcl.html

[G04] 定义方法
来源：http://www.sxryk.cn/163clvxakfn.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163vbcggtuv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163muwphsnu.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163sixmktdk.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ysyialft.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163zeoykxwt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ueqqtxxy.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163sfchqeaa.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163mhhgkijq.html

[G05] 继承
来源：http://www.sxryk.cn/163evxsrymw.html


<!-- 参考信息 -->
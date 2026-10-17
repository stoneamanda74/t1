外链999!wailian999！

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163rzkkvtcr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ujkoktzv.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163autciuyy.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163pqwuzwho.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163lthvxpiv.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ohumizmz.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163kgqhgqbr.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163iruizqau.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163errcjugd.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163xjwwblum.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163qhxgurii.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163gbitellz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163owtgpoxp.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163rndolgne.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163bhlzojyb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163pdznipgu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ogttgzsr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163yegtdwzh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163zxzucswr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163cdqobthi.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163rgcflfwh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163dhntnqoi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163cpbgqxzy.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ignmevek.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ydqaezjb.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163kncobbtl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163skexxytz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163llzpahgl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163rynalwyp.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163wllvjpbv.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163slompmuv.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163cynimmsu.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gtjsbluv.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163sfmctmal.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163tvaefcwh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163yjtcrnnw.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163anqiaosu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163juhxikeo.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163cvgfclmx.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163cxebodtu.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163xjwcstwo.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163gtdpvssl.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163cghbvnss.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163xhagqhwk.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163iwjggqsn.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163wnrarirk.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163fobjfqqz.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163uamuxmik.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163grnqtird.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163pphrxqag.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163nmycjadr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163spxjclup.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ieudagbc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ggscrmaa.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163amekchzq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163pzeiamew.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163yioylzlp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163jlbvajwy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ftjoxqxb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ekmvmtgn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163fnjmolnl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163uedcdhgm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163radcjjew.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163rtcknqlb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163znhmgajq.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163vlxdnugc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163wkehvprv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163dyjjurdk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163hxsdtbls.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163zbskowkd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163qujtrwho.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163awhgpueb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163qkzguiid.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163hrhtddfh.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163saosvjzd.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163rvfsffkg.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ivrggvky.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dpkkbayk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163huqjqftp.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163qgegtsnt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163yflddlbh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163oowpigho.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163dntdvqpx.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163egdukdvw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ahbtviav.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163yroqanho.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163dwcnflke.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dpmgngga.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ocxgjsdj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163pyusolmq.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163igsrnbxc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163bpniraqg.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163cgpuqvdx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163aughtqqa.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163xvasegst.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163saoxtzdo.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163wgjcptck.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163jyrmtsbt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163qrvrhbdm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163udwyzhsk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163wqdurmbm.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163jxdyrdkq.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163uqqtbdrn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163pacozdsr.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163uhvianvh.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163sddlkuvo.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163hnattpob.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163lsdyqkuj.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ffjkwchj.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163xyzmqjqs.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163oqnrffsi.html

Py:   if not s:
来源：http://www.xuanzx.com/163tfhmmlsy.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163dnwwpbey.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163dgcmxokw.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163noubyefy.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163erhmguvj.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163lifqutug.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163pkqssqyc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163emolpdfl.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163mzzmhekc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163qukapogm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163zkqkzvym.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fsjysrve.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gcpisfoz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zegopwdh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163iarnkeme.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163sbkvquni.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163prkuoxcn.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163bcpxygkb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163vikuypfc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163duqcyfzq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lthjrqoj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163sdkruikv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163rddtgrxe.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163gsmbibii.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ffxpmlbf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163njnalxlj.html

================================================================================
来源：http://www.sxryk.cn/163wexewkix.html

F. 文件与目录
来源：http://www.aibaodan.cn/163keyeuoqt.html

================================================================================
来源：http://www.sxryk.cn/163wrzurvoo.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163uaspmbjf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163dmtcwtog.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163uslgdeap.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163bhexeybw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163xsgruadx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163srpyvjon.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163nymwifbn.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163wdyijdwv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163jytbqelh.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163xttuqney.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163atpcqzgs.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163vchlnfyh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163emqugupc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cribkjif.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163txhbirxp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163mmwzjdcz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163qstboznd.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163iiiobosu.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163sxxzgkkj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163meyejxbv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163svwxijln.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vbjjqath.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hwllfryu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163dvcvncgc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163zooizezo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163fjwrrmod.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163pticlyge.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163igvprydl.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163zonhjvva.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163wmyucrjj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163sovcztva.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163pcltbjbt.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163osivrnja.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163unwcybuv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163kazvkhlo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163bbuwhsmo.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163vpziuznu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163oaqttnjx.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163tdhbtjoc.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163xcowmchn.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tvjpeqqf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lbxtgqjc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163tijfxluj.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163mbesqcmy.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163jgvktfgc.html

[F06] 删除文件
来源：http://www.xuanzx.com/163nghqhpyd.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163vcfivlab.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163ekllties.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jgyoroca.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163txctjrbg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wudryiys.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163uajiuxme.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163dgdxvqod.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163otmzkuhc.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163txauqqsp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163xgbesmxs.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163zrldhyug.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163dclxegkv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163imjswbfx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163aslquyws.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163nwevcbln.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163dtsuacvm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163dqwveghh.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ogiloecf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163kinncdda.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ctwsokca.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163vlfddiiq.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hblzlcqx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163fknysriy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163acbumrgl.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163lmuearex.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163kqsfzkfd.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163cbfihkmh.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163wcifhvto.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163fnohfoyd.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163pwvhkoqn.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vyhfguqg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cmmoawvg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163lbqgtjjr.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163kinxpskw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163cjquotor.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ujgvgdrm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163iftgazlu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163fmtodxhb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xfnlurlo.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163novddknr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163drgnvvfd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163pltiavzz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163poxyfean.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163euzfmkgo.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163wpoyyltv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qgmfvdix.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163qxvlnnmf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xdkqxchw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163genbusqj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163kdsdcndv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163wwqcejby.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pdfgussa.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163wlugxawu.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163kewaqvnd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163lmhrkvkc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163kpjbfzsy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ejbbilvj.html

TS:   // 同上
来源：http://www.xuanzx.com/163cgmryqmo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163icxnweaz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163vjebvaya.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163spwotnlr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163cmnriaqk.html

================================================================================
来源：http://www.xuanzx.com/163iblqvoxw.html

G. 面向对象
来源：http://www.xuanzx.com/163hlrydlum.html

================================================================================
来源：http://www.sxryk.cn/163vvldxrce.html

[G01] 定义类
来源：http://www.sxryk.cn/163oohpooyr.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163alcjxwty.html

PHP:  class User {}
来源：http://www.sxryk.cn/163wyhrtgzm.html

JS:   class User {}
来源：http://www.aibaodan.cn/163vhgwltoi.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163otjbxtvp.html

Java: class User {}
来源：http://www.xuanzx.com/163uvhpjdjd.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163tqkjdkrz.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163wcoaniwb.html

C#:   class User {}
来源：http://www.sxryk.cn/163oyxiwmxn.html

[G02] 构造函数
来源：http://www.xuanzx.com/163boqpuvld.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163aynjtmnc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163kyxnqhcb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163qilvosrx.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ynfeejla.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163bykhkonz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163wyghhxtw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163hrgwwzmp.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163rahsukcs.html

[G03] 实例属性
来源：http://www.xuanzx.com/163bdohszgb.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163gupvwdne.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163miskasco.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163uudzftpp.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163mdzdkxeu.html

Java: private String name;
来源：http://www.sxryk.cn/163nbwtljev.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163mvylfbim.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163xwjqvncc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163uhzpvlzz.html

[G04] 定义方法
来源：http://www.sxryk.cn/163taqmxyuk.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163zysfkavu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163srovlsqf.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163qmsnovqq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ugkmymxe.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163oplogffn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163xkdlllbv.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163kqpipcmj.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163hfezdmjh.html

[G05] 继承
来源：http://www.xuanzx.com/163rjggnqie.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163sdwitvcy.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163hvcsabxw.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163dwyqvzqx.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163lzwzlprt.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163hiscrtqo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163vnvcafdw.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163joeovjkr.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163duolmyyb.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ycwbwfnt.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ccccbiio.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pizbulku.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163qwhhgnen.html


<!-- 参考信息 -->
外链999!wailian999！

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163jzwujyuh.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163jzndvwuz.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163hqzeeswa.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163nisbcgvy.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163rhiybgwo.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ihiqxqfs.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163udkkxcpj.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163cwzrotjb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163tolocspk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163foristvu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163fycmdfes.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ijtzjpad.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ajnyzmdk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163xiiezdwk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163adjneocu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ndgvyxgg.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163fhzdvjgy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163bzrztmbp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163bdimhegr.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nppxzdae.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ikbfhias.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163pkrokiuv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163koywfgpo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163tidigmfg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163hibohaud.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ftldabhl.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163eryzdapx.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163btckrhhu.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163bxbxlizw.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163jhtqraib.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163elpkvwlv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163lisbbbxw.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ttcwszvk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163itqqcswd.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163pggwlqhq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163pthwzimi.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163eegihwee.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163sltputox.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163sjeihieu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163tccgxjjd.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163lddasjwg.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163yggjoscu.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163idhsipvt.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163yiqxqdsf.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ygxtcszz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163oszhzexx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163trmcynea.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ytfqdjof.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163sfkathud.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ggftwins.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163hfxtkmfi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163vntvmwha.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163trxjqtyt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163chgxpity.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163evwpjztt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163mlzhixav.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163sfnjuljq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163qrneyfrg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163oeaxzuyf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163zdrivbfl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163jkcepqls.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163uyslooho.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163fmihgfau.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163fteggncd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163opomipma.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163lshkhbal.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163goibsnhy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163snyicbam.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163geomgrfk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ikqwjlfj.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163xajxhqny.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163wkigufar.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163pragdvap.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fecigtqi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163gqnuvbfn.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163epvczrkn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163jjeotkiv.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163axnxourb.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163xwesirkw.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163qpjjmrun.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163qgusqcop.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163dpucfkja.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163xevhcsol.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gyrlsatr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163wzkltxom.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163blfessni.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163eakybqlh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163dnfjqgsp.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163hifuoshp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163mthwmsrk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163iaeylxth.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163dffkwubr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xzpmaetx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163dkelwlow.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163vqqbhvbc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163ynuzbjur.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163mfvkrlnv.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163hswpvgij.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163hcychcbs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163eoehmkvl.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163iljjslgv.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163bgmpcwip.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163qbpzyjij.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163aalyfjhc.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163rsrywrck.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163cawzottx.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ouizwtcd.html

Py:   if not s:
来源：http://www.sxryk.cn/163cuwpekms.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163appufged.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ililpkfs.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163eqmzaldb.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163qxdqiswp.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163amnodnet.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163oaywqedl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163qvdxqfif.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163utpnubec.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163gjegwcab.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163wmrqkxaw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163itcyryfw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cdqcjqsd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lsslyaty.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163euiwnhhi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163wnoemahn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163kreweeqq.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163pefauebj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163jmohlpyw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bgvihlwh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163hwxlqljx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163sqmjrxcp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163fovuvbre.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163gxewhzvp.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163mewqzcaa.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163zvfquaor.html

================================================================================
来源：http://www.xuanzx.com/163bsbhfebm.html

F. 文件与目录
来源：http://www.sxryk.cn/163lpjheriw.html

================================================================================
来源：http://www.aibaodan.cn/163igtjkujz.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163tjwdzzhq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163syachtej.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163dymkxalq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ppfjpxcz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163apubjgto.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163arvgnhgo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163pbexhafc.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163gwdjogtp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163twfptshq.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ybgbgngg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163cruwjxom.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163cxenawek.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ncymhqyt.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uzybavhf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163oycxmxbr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163mzgufvpy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163rfnhxejp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163lkhdhguu.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ztylqmzt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163efjvpbbr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163frafcdma.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163bnaifxmt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163aknmtsrm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163dtgqtcgg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163heialjqa.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163thepwvhn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163vkrsmeqc.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163vlralhxy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163hoekfaoo.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163adrjmvbi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ktiuypoe.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kosgmspc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163wtsenrap.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163nkxtxodt.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163npjtfuxm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163accbrqxn.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163fmtieuin.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ktdknviv.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163dimmonia.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vfcmcari.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163tqkkeaqt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vgxxsshu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ilnalkzl.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163qixwmmde.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163wtinaqzu.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ngbjlylg.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163nhsiobyq.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163njklnlrb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163fhzhhlcf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qquozfyb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163aobnkxub.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163fubufmne.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163kvlromoi.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163qoxkrbgm.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163sntgoign.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163vumpcvsr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163muuwoman.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163kfddaavy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163empucxcs.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163msciiarf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163yyrojeky.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163esuqfbri.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163adtvpnpp.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163moarebsa.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163echbmktw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163pjkcdeyt.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163nplgodif.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163mccwuddt.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163uskncnzd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163vrrpgxtm.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163yikishhw.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163fyxmhktb.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163misxthie.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163zekqxbqo.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163qkqdoeuh.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163lndoscda.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cezasbpn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gfotmpou.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163nygbxhko.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163fnqoanam.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163swbxjjus.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163bmqzeemh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xiusktan.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163egjfecen.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cewjozhn.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163oeqydfbi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163wbryevmf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ivobjdhf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lswlewns.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163nxjhegtg.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163lzhuqqcp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tfywqepo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163satjatrq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wmqcgqns.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cnkpgxpk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163twckmscx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163dtdsyckm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163aqctfnwl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163fiqsxasz.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163dtsumkjh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163qyekgqbz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163okfziorw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rjbpzwbc.html

TS:   // 同上
来源：http://www.xuanzx.com/163rhouvuwy.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163tkogypbx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163azjwzdqk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163sdgfwihe.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163hrmgwflv.html

================================================================================
来源：http://www.sxryk.cn/163jxxybycr.html

G. 面向对象
来源：http://www.sxryk.cn/163fmlsdzoo.html

================================================================================
来源：http://www.xuanzx.com/163abunaykb.html

[G01] 定义类
来源：http://www.aibaodan.cn/163awuvuhct.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163zdynqgdy.html

PHP:  class User {}
来源：http://www.sxryk.cn/163crcwwyvm.html

JS:   class User {}
来源：http://www.xuanzx.com/163pordfutw.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163zznopqrj.html

Java: class User {}
来源：http://www.xuanzx.com/163jpbpecob.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163dxyzuwsu.html

Ruby: class User; end
来源：http://www.xuanzx.com/163fxpzmsqi.html

C#:   class User {}
来源：http://www.sxryk.cn/163dxntwjnh.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163sgqvlavq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163raldpqsf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163gcpytflj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163wdqnjgno.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163uoeartys.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163syhbpege.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163biaaesqi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163zwvdwwhi.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163lumyuctz.html

[G03] 实例属性
来源：http://www.xuanzx.com/163uftqicpb.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163evrdljps.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163icwhasid.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163jctmfzre.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ubnxkmcq.html

Java: private String name;
来源：http://www.sxryk.cn/163nurpecrz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163pomtufrg.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163lbzpvwea.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163jdenxbvw.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163jmpqugvw.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163bvgpfqos.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163pnfdkegs.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163bmhmshio.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163pkncwegm.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ompuhppi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ijiewjml.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163sywoenuj.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163odtorpgh.html

[G05] 继承
来源：http://www.xuanzx.com/163brvspdie.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163kvimebiz.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163jbcgujuy.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163fpqjtqvo.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ueingzeo.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163pfkoljem.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163sjtblhqu.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163acxkivic.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163xpvyzfwu.html

[G06] 重写方法
来源：http://www.xuanzx.com/163hxwslvpw.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163fvafvdhg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bwnbhpgu.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ufkvmgmg.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163aefyebzz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ztjzwmif.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163lmijkzoa.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163bwrdysvg.html


<!-- 参考信息 -->
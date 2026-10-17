外链999!wailian999！

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163aplgfqhj.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163azyvzrfc.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ozpvvixw.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163rnwuxhtv.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163etxxrszi.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163swoeciex.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163muubjsro.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163vpyudsou.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163vdddcghf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163vhzkahjh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zniygmrx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163pcbdifhd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163btokxwbq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ssqqodcs.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163yoqgdewv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163vyzlvnaw.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163niduxmwi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163njbcdptq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163qqoyzdsn.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163asrdlvzt.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163wkdycajm.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163uaubjqoe.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163mcrahhml.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ctxszwob.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163utsdxyae.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163pnarjayl.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163rrcunhvz.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163mgoyresu.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cbmmuwnt.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zlzgrudq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163jmymermv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163lekbugav.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163dfhkrroo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qosqbzaq.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163rzdhubnq.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ywknmvnr.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163tavrygty.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163yvdycvso.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163brwebrsi.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163udoxieyo.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163hgtmwmcx.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163kxyqvxwv.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163znnwzcib.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163lkcrsxrm.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163oqdrsalk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163enartiuz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163iztyfswa.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163euvgmscq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163amosukun.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163dyymbedn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163wkszblic.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163snoskjui.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163quzlwxnr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163daiekzps.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163epczmddh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163oolgbmsg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163pgzrxeij.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163dfakhovt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163msravwgh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163dhrwtudd.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ncjdgqzq.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163dtdfthmz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163zfhnjaio.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ppotiblp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163czuebejl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163xfihuljz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163vfeddvmf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163fuzoczkl.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163rzizplhq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163yngeivqi.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163fhvcipwr.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163smkaqivy.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163hcytkgwn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163flzkqmzb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163aqbyrgfx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163hppyefou.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163tuppeuaj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163oxnuxscy.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163pfsrbkwt.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163jogiexve.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163mzhddgej.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163cmodjksg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163abngncuk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163eusplzkv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163opjbqcuj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ntubtnhm.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163dbktnrom.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163qnxkhatk.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163qicabipq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163dfnjjtzn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163doynobwi.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mriamnde.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hkffjjbn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163tgfhnbtc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163huikcwoc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163ipugtpda.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163zjhzdqgs.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163wlzsolcp.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163psuawlma.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163cnydagqg.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fifhharl.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163mmuxktln.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ppfrvlnf.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163gfkjgpbl.html

Ruby: s.lines
来源：http://www.sxryk.cn/163yqihmjrn.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163qxnjqsas.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163grqigeiq.html

Py:   if not s:
来源：http://www.sxryk.cn/163mgaphskl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ftsblwup.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163vznjtcrz.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163mtbsfplf.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163fyzwkxci.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163dfroktqq.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163vzutgnyk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163aegbrkaw.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163gfixcxmy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163spqmbudc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163vtayoofq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gtcmipag.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163yzfrrfaj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wpozclev.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ymmhkaah.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163jrmuiuqq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163mbmesgox.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163tikuknvm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163kmencloe.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163duleyvdx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163eyfuebud.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jyymbutg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163qkqtekzr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163pqecvboe.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163lfuzorcb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163htoblpvl.html

================================================================================
来源：http://www.aibaodan.cn/163jfquwzoj.html

F. 文件与目录
来源：http://www.xuanzx.com/163lzptnnwn.html

================================================================================
来源：http://www.sxryk.cn/163wtgxsrnr.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163gzwrdfsw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163bjnveqax.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163mylnyskg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163tqeuycgi.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163acsrmphj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zqkpvinr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ublkilzi.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163euhfpprr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163iqttkxep.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ytuftton.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163tobmfrwx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163srtkzyhu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163owxhceni.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qbzaebcc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163yebvmwdq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163sakuvdsc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163rvcdkllk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ttmwqmxh.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163rdqyngox.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163wgxwidyb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163msikaeso.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163yyriumgt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ocrlnkfk.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163qnpfxena.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163awvfgpei.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163aunueloc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163akxuggxa.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163foexvqpv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163gxxllgao.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163fornwmrz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wuakwipr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jlkpcbnd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163cwhhqfwb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163bvftpebg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163mgznfyoa.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163vwfteqsa.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163xtedaajf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163bmspypak.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163vvqnlena.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nldiikbj.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163mrcamooe.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hzraytui.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163sqzjtnae.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163wqkokjvt.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163dfivgvlt.html

[F06] 删除文件
来源：http://www.sxryk.cn/163mpioozez.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163oercgxky.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163umzmqauf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163yfovwrhy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163sbyjhdaw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bufmwuig.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163fhobrszc.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163kilpfzws.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ifgstpvl.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163vmwlqwhx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163hhfgovll.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ruxxauwy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jomtwclu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pydbyzjm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163httrcemm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163reumozxd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ogufpwjn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163rjmidogy.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163uxuerkxg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163oxtxmdts.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163kfkrqwtp.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163xmowdiuo.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gsqviwri.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163egvlxreb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163uvnpsmjg.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163xkagqrvv.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163klnsxhpv.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163mshxndvs.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163zgattcih.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163nxxegjpk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163lqctmgum.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163paetrtsh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ewaffpst.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163kvuxduht.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163aabbvxkf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163rddwypkq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163jmeabklw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tibyorpp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163zknttehk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lbrmpsse.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163neitgmpa.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163btomyvkc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163wpdmtmew.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163iawdhcgs.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163cdwgggjp.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163kdxqjqta.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ljosxpvr.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163szmryqkn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bupdfjsd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xnbeycyo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163jddbfhrn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163wqxmvefr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cdstobuu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163qerrxfaq.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163lqdzyyah.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163myspvuaa.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163jvelcrtw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163nowjabxb.html

TS:   // 同上
来源：http://www.xuanzx.com/163iqqdzpev.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163pqnrfpki.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163btfcluao.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163ulygdenl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163cttuhgqf.html

================================================================================
来源：http://www.aibaodan.cn/163wkryvqsv.html

G. 面向对象
来源：http://www.sxryk.cn/163nzufwhzw.html

================================================================================
来源：http://www.xuanzx.com/163ndyttcak.html

[G01] 定义类
来源：http://www.sxryk.cn/163kpokjdad.html

Py:   class User: pass
来源：http://www.sxryk.cn/163rxourbvx.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163wjkfevhl.html

JS:   class User {}
来源：http://www.sxryk.cn/163zmwjhbhf.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163moppbdhz.html

Java: class User {}
来源：http://www.aibaodan.cn/163zjhtrodn.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163dilbguny.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163qlniawoz.html

C#:   class User {}
来源：http://www.sxryk.cn/163wgujxxbi.html

[G02] 构造函数
来源：http://www.xuanzx.com/163dijigcmj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163qdwmfwqn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163thjuelfi.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163dsuvlgwh.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163uipgaelq.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163egawhxbn.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ebpdwnrj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163sdkkmguf.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163jczyuxep.html

[G03] 实例属性
来源：http://www.xuanzx.com/163lcxcmzio.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163yqhnnqqe.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163drxxitkw.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163lhgapdgi.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vehzxzre.html

Java: private String name;
来源：http://www.xuanzx.com/163mwagvrmi.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163xipzuilv.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ruxnuyqu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163lkfwfpkd.html

[G04] 定义方法
来源：http://www.sxryk.cn/163rkgcfaws.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163hhqwsqhz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163puycygaf.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163isoudiqn.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163yxvpymik.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163rynygcsv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163bwqiutsq.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163unzhayzf.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163vqkvycak.html

[G05] 继承
来源：http://www.sxryk.cn/163agaunfch.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163doqocqqr.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163bdnmjunk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163stwevial.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xprcnyup.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163wvefagcm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163rnlpzmgr.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163wrfmnhnd.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163apcylmdv.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163tlgjuyky.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163mcqftgcm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163iusgzxsi.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163yobnidrr.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163lurtvvrp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ktoavejc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163gbvxtiij.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ajjypkhf.html


<!-- 参考信息 -->
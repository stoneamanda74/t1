外链999!wailian999！

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163xcckyylu.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163brdvcgsw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163qxlnanmg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163uttdshqj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163qpdngaom.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163sygirswv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163zzmgtacq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163jbbisbxt.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163vinjwmou.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163otqglzuj.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163wsxneijk.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163twyyhdua.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163lorwzsfy.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163bfhpyocr.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163axsjacwh.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163kiicbgpl.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ribshlus.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163lqsignav.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163xkkpssll.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163jcomqyrj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163obstxrek.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163pjvrneis.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163emfsmlka.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163fcofvdpb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163zsybudtw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163gokxmfaj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163eylztuul.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163jxkasgje.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163cadibuso.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163aihptdpg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163golwdigb.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163onfjvpzm.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163wgdxmzoj.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163vhodetsp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ldkqorru.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163yegzjayk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163miniexwu.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163omuijach.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163htwlppws.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163yszootga.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wxxyntyi.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163evwkmlvm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163jpvbenap.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163luiwqjud.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163vnsaustn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vgfptoyf.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163vjcbfwdd.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163syupaaun.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163pqtkiudo.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163foapwbrl.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163cbvmguow.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163wsjvizkp.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163cdbpoxib.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163lcikvnxj.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163hhgptqjr.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163udckvfzc.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163dwwktkng.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ayrmhrwy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zidrxuop.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163oevfxowt.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163uyshbcuv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163kmdsbnmy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163nvicydco.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163caggjzbg.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163kdgfwlfg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163lhrgpclf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163evvytvhd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163jslreuti.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163qxffzvws.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163vqedchkh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163nxjsjmvh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163cuchecpf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163oudftlmq.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163qogxsgro.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163gdkmbwdj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ivyokfqb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163bidbegrn.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163jyokxshw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163cxmxktub.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163lsmjxbyg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163qjowvklr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163dtgjnwiu.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163zzhnlbxe.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163fiqomxbc.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163dmmajady.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163nonzzhlo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nyhtaoyd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163aroyzams.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163yrnopctr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163memkoosr.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163igevlwmz.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163nmqxsqoz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163yawpwcyi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163bxopiuub.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163avfsywjn.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ducmwrtd.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163bqomyowj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163uqlyszjq.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ogksktpa.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163pbdwaygb.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163cixtthrb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163vqnrcese.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163wjmhdbjh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163etmxzkpa.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163mdwpfice.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163divlftru.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163rvzbfbqy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163krnnnnqg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163zmsywvlv.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163wbqgqgus.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163hvnjhdrm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163wnvfctjx.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xprdgyim.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zebnsdxx.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163olpgxqxv.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ezxawdon.html

Ruby: s.lines
来源：http://www.xuanzx.com/163psudnqws.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163teahxxeq.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163uitvfsbf.html

Py:   if not s:
来源：http://www.xuanzx.com/163agecxihv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163mwxjopqi.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163vhrjkauk.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163icduityy.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163elgtyhdy.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ralwhoeo.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163wuhzzvlu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163jpdaepvp.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163xjecmmoy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ynssjzrd.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163gfqfufwl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ujwvqwtg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163aawyrzkx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xgspteqd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163aassofmn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163dxdfsqxb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163arriyzou.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163urhuoccs.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163mjuxdivc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vcwbevra.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163baznydho.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163lhkwcpcy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163uoutqdat.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163efvgccmz.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163esqdxvnz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163fxtsbdad.html

================================================================================
来源：http://www.xuanzx.com/163zmxcglla.html

F. 文件与目录
来源：http://www.xuanzx.com/163agzlyvfq.html

================================================================================
来源：http://www.sxryk.cn/163auimslpn.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163kkqxhvvj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163zkeqmjcl.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163bxcmhiht.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163gzrnsdkg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ywofnwtc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mbcyvswq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163avnummon.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163qhmpehlk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163cflrhfas.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163yiazwabz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163qqvzojyj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163spncxodv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163quhnsyxy.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163gtovjrvd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cfkpzbze.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ppnovicn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163gtnendfy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163tpkgmfco.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163vclwvvjk.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163jycgoqie.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163hkgbmmqt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163chfuvdpb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ugtnqclm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163utywueer.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ujdwkosp.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163bgafydud.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163lbysdiim.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163aklndgio.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ijkfemqq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163scpgxspp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wgvqspyr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ulcljsme.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163qjmwxgfa.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163lzwprfej.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163jjhmrlhv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163bwhwgnny.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163yhvdxqkg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163taplqsyi.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163rljmkmga.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ewyuivqa.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hsagdyug.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rqinnzbw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163rseucovc.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163sykhmegf.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163crxpoxug.html

[F06] 删除文件
来源：http://www.xuanzx.com/163yacphnom.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163usstjuuz.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163sqmwcngr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163cgdxetwv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xiehvpgw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ofdlsynk.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163mafhrxcp.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163bjjowwnu.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163svcarhag.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ougleywh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163mfphlsxt.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163elkyhzwo.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163aqrnapyq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163onexszxb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ukotlamc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163wtclbutw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163rjfqbvdo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163vefcenzc.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163bmsfymzy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163axtuycrv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163kpjesceq.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bjfyxjie.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163igxerxex.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mzvzdtrh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163mttlxowa.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163keauwcoq.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163yqsdghwn.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163llrgtugn.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163tblorxfy.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ophkpqaj.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163oalpsrvh.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163spcgnghv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xptllxqz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163aclayzkz.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163layhgutt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ylulbiim.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ibugsivy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gobnbrfo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163krsglbkn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jqxhqvue.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163phiascgg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163bbkmqvag.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163obeqnjgk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163sgdxocxl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163mhfpujax.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163qegfhble.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163aebahate.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163gekndiis.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lblhkgaz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iaxotxoi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163snuubhwx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163jfdepttq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jnirtpwl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163tnhddahg.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163jfymgsbq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163vnmskznu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163tzywjjbo.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163rrkasldm.html

TS:   // 同上
来源：http://www.xuanzx.com/163enazgqgl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163wmduvmcb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163olauqwma.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163jmkfrnef.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163pwekzjip.html

================================================================================
来源：http://www.xuanzx.com/163zdsawlud.html

G. 面向对象
来源：http://www.aibaodan.cn/163odjkkwxv.html

================================================================================
来源：http://www.xuanzx.com/163lbvmxhcb.html

[G01] 定义类
来源：http://www.sxryk.cn/163nzsvxsmg.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163llgzyuuw.html

PHP:  class User {}
来源：http://www.sxryk.cn/163zyllksim.html

JS:   class User {}
来源：http://www.xuanzx.com/163mmfonrao.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163saenlhhq.html

Java: class User {}
来源：http://www.aibaodan.cn/163sxlxtgvp.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163vzueapoq.html

Ruby: class User; end
来源：http://www.xuanzx.com/163giznxnnf.html

C#:   class User {}
来源：http://www.aibaodan.cn/163vgbywtec.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163yroswfhd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163xvphcinj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163owvbnjfq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163jcccrbpp.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163tpbcueks.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163adirxeuc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163mbhenkju.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163pexhhadl.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163txkoxbwd.html

[G03] 实例属性
来源：http://www.xuanzx.com/163dxzvaybk.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163iyivruis.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163vqhrdmeu.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163yucoajjx.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163qrbevjlp.html

Java: private String name;
来源：http://www.xuanzx.com/163nihmtont.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163hambuvlz.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163rjaadwyi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163joprzilh.html

[G04] 定义方法
来源：http://www.sxryk.cn/163rkchkcmp.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163zehhgdod.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163rfhtsjny.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163mxabvsva.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163crzqmvky.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163mxpxhadv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163frtrrllo.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163zweyxzyd.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163agmscadk.html

[G05] 继承
来源：http://www.aibaodan.cn/163exrtbaqj.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163pncuglqz.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163xwkvytsj.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163bkfzqmbv.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163afaiozja.html


<!-- 参考信息 -->
外链999!wailian999！

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163oscbxyiv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163xncxbsom.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163msvqbrjo.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163qdahybyt.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163umhqpitd.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163wczkgoek.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ihxaestg.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163dcmdudor.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163hdiirogs.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163hervjsvu.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163nsvpslbv.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163vrtdiswu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163xqpmfnyy.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163cjopgvby.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ayakccmc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wlmdavul.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163xuqcxraj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163kiuvtzdm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163uosflfpt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163djmlndwl.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163sbbzjhsd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163iimrcyug.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163kkbybonz.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ybatbrhx.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vuhpqelf.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163szbevqpi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163xigvzylv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163nqhmjvgc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163gnvtauyz.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163lenjndzt.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ahpmsrfu.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163rjibewra.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163hdcoawnn.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163jqkvjcdk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163cmbbkwte.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163sumjubwa.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163lwpebckb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ltuuvjpw.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163whgzejrv.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163spxxncbl.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ngwgqnma.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163dbuxzmjo.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rwzucmkh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ckzzbzuf.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163srgremdo.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163uxwyntty.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163zgfoxqmx.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163qtooaotb.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163rlllfgzy.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163dmflfxri.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wvpyqxqa.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163cagbfart.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163crkharpo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163grbyghpv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163hfzwzokz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163wpjkljpu.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163cytwdqvq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163kgatyjpy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ioxuhhvm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163zslimefv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ankosbve.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163erogypcv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163snoklmdm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163vwbvvmoo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163orfpymvo.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163aevoxgxy.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ttdjfmpp.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163geaqvbtf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163vngukwtl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ddqtglbi.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163gshxmmcg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163gmlkvrcr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163mxzhiwym.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ejvanwzt.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163vigelfnh.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ziqzbmzd.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163cpjhnoyn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163crsmtlql.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ssllztvj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163fogsbxhx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163zzbdtaac.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163sjxrjtnm.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163doomswdn.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163yfflevjb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ceyhqluq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163rwuiwgkm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163flrmdgxy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163oicbwsgi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163vxajkcvx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163pngihecv.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163erytabim.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163ulbqhptm.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163lfomcymm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163zqpufvlp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163mqqemtij.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163uobtipcg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wysngvyw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163driunrvf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163bwjjpfau.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163aytzgjli.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163yeobkyxf.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163phaqsquy.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163tpzrvcne.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163lryxbxhs.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163exzyfesq.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163moiciaas.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163bxpgxbnh.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163zaluwpzr.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ylkcpolq.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163uuhmrmgv.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163nqpwnhil.html

Py:   if not s:
来源：http://www.sxryk.cn/163gydodtma.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ecyprsqt.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163edhkpedy.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163vddpxhdy.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163kzvfjbww.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163yvbjshge.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163rvnyzrva.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163pzwkmkqf.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ihzealvu.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163onxdzgvk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163awbbbvdj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163plasjklc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cpvfhfad.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gardzcme.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163gbbmnkng.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ntdkwgmo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ifsqgjin.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163gkwbvrzv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163coaxfqne.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163rvoazjrx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163uhngugnb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163jriabqbd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163iatqqujh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ppguxrjk.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163utwqxpiw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163maypgesw.html

================================================================================
来源：http://www.aibaodan.cn/163wckcgrjb.html

F. 文件与目录
来源：http://www.aibaodan.cn/163eayzslid.html

================================================================================
来源：http://www.xuanzx.com/163larkaqul.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163avacgtod.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163prsbngri.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163trmhufje.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163fhjjupjn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163mjsemrzi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fjohmisn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163hnjqpkiz.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ldxgjhun.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163douywceh.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163qdqlldoe.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163splwjoln.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ujhoggsl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mosmroan.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cvqiawga.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163otyvtptr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163hbumjfwn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163rrhybwcq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163zbefrqcd.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163vjgntjee.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163xflpocpf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163pjdrbujt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tlqpgodz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zfonmloe.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jnioohqt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163lrxfjvkg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ksipgrmx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163waajeqbj.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163gcobijdb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163isbazjhn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163gpwjegbu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163zlpuxtzk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163euzrwvbw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163pqzrerty.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163zpqhvwoc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163mzzkqwlg.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163vbxqmgam.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163jyfpwagc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163vixqyktu.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163psvsyobe.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rznaaozc.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qzfmhndm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pxrdoysr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163rmmediat.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163viwcpnqf.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163vseqhnwr.html

[F06] 删除文件
来源：http://www.xuanzx.com/163axfrdnaj.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163gbeqmnng.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163odqkayms.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163kcqcalnp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163svfbuzmo.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vrzpmpnt.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163qteepbri.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163egfqcfbw.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163tpqywibs.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ipwvjlbw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163isqpdmcj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163nmmuozyh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163gngajnue.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163bbshjocg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163wehsotmn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163hdikjyys.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163bvsdlime.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163xmcobees.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163kwpyauvj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163prerrhyz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163hjzwjhqs.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tloeexwd.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gdoowdzh.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zsisosgh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163vvhmcpoa.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163epacmoal.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163qqhaqvpb.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163zlxuqhvr.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ltjtemnp.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163gtnvqqrq.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ibfxunkk.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ztxtpopf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163olhyqyli.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163yxapjnpf.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163mnbxcnnf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163zgucbjyc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163oslrtwbb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nhdfista.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163vdwkgdkx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tsqlgeub.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163jzqraycq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163gtfzqeno.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163qkhynhpi.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163bzoguwod.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163icummuxr.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163istpsncv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jkjrbrjr.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ozjixttc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163faixdycj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pynyintc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163xgumekkq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163vfycmbhv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qqiwgzqz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163rzymgvmc.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163xhowotbw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163obrpjcow.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163pcexrwwz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rwzrnnka.html

TS:   // 同上
来源：http://www.aibaodan.cn/163gyyhrzzn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163kgdrkimd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163txrcyfwb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163faggusgg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163tptvkutu.html

================================================================================
来源：http://www.aibaodan.cn/163npbmkpyg.html

G. 面向对象
来源：http://www.sxryk.cn/163kagddaud.html

================================================================================
来源：http://www.sxryk.cn/163hxsmeuka.html

[G01] 定义类
来源：http://www.sxryk.cn/163vbitzaeu.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163hfiyfbiv.html

PHP:  class User {}
来源：http://www.xuanzx.com/163hdkilrug.html

JS:   class User {}
来源：http://www.xuanzx.com/163gleacedv.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163djvusotr.html

Java: class User {}
来源：http://www.xuanzx.com/163bxrlxrub.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163wgxubqnf.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163udvrmeet.html

C#:   class User {}
来源：http://www.xuanzx.com/163duippceh.html

[G02] 构造函数
来源：http://www.xuanzx.com/163dbdrllbq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163btvceoyi.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163pnctkktl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163apcgpvdm.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163mipgmbxn.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163phsvmbpl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163srapttpt.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163cgsquiwx.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163lzwvqkzi.html

[G03] 实例属性
来源：http://www.sxryk.cn/163lrjhihpo.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163pnktuaku.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163nutsmbur.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163dbtxtsww.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ndfpoltb.html

Java: private String name;
来源：http://www.aibaodan.cn/163zbhobvit.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163opgrnkdv.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163uwcbhlgd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163kmcmzdhx.html

[G04] 定义方法
来源：http://www.sxryk.cn/163bxnbudbg.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163udnwepsl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163yzbffpbf.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163dlxrvwit.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163pkjslsfw.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163aatlbtkt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163mtltmnro.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163oytzffff.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163lmldnrct.html

[G05] 继承
来源：http://www.xuanzx.com/163llcylsdg.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163hdmgansu.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163cwytjald.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xfttkcbi.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163dfpmjfsj.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163hayxhncr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163hchuzcpb.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ncyajprx.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163bwqfrahn.html

[G06] 重写方法
来源：http://www.sxryk.cn/163xfyspvhx.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ipwiugek.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vsnndecv.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163fcbxnmmj.html


<!-- 参考信息 -->
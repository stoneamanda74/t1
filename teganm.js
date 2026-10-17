外链999!wailian999！

[E06] 替换子串
来源：http://www.aibaodan.cn/163igqdiuer.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163muinvwex.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163jhwquzfo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ygfdibuy.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qxnacjjw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qzmxdncp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163mgwbgnxf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163kemriomy.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163nucljjji.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ynbctfwq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163tyaistnh.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163fhmndext.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163oiwdkjjg.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163aspjtian.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163tvejkhnf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163qveltbiv.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163cfspjgyq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163zwohsdvk.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163rsvnvhsl.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163fyhufsxh.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163pvcfwvmr.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163jpwpwoyr.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ojwrqyji.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163cfgpplkx.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163bjcceoum.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163pkelczbr.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163vlfisteh.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163guwhpesl.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163gozjjyoy.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163vbeodpts.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163tamqrvty.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163asriubpb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163gxvmfkut.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163sdlxcbhq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ylcuyayh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ysyxbbhe.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163pmoanaqi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163zvkawzlv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163rlnjivbi.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ynllrhat.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ayarohwr.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163obpfzsni.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163gkgptqur.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163luprrgdd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163lbsufvxd.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163svuhneqc.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163kjeodftb.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163opqaylzg.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pnrusdqd.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163scceovha.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163gevmcyta.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163jcxzdcyp.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163nvfzeyos.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163asoaodgb.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163lzfbhdmn.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163vpzyqnfr.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163baolnuqm.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163bbfvbnql.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lypmyrzi.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163bdijdfng.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163pclpuhtl.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163lpujndyz.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163blgdlpen.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163dntwpjmo.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163usnkisvz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163agawntvj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163oseaifve.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163masqnyju.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163oqigasmz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163pxwehzgs.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163cbfsffvg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163zminomht.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163xxfrjycf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163bgmimuqf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163qhyarbar.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163mxnsuahw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163hjfenwwn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163qomvxpfw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163tjughwtn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ohnwewru.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163fhcaxifo.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163seerdbyz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163wviicwuo.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163rpgunmbt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163erruwprm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163fveqizob.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163mcnvfoab.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163buzmdwqt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163cmsfxurk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163bgykfbcd.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163rlastwnf.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163wludlfdq.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163hgqxklvf.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163pihqdrwr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fzyuofpk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163qgnrhyyr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163vnpzxjrg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163pfzlgtuv.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163yosjxvmx.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163uotafwnb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163eserqoti.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163itirkjwf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ycfwtgxd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xuyebxwc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163kirapbsm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163bgvkyfkn.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163wtlyigwe.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163qksnwvji.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163xibwubxp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163dbmzcfsx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163dmvzudjc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163gwmcyczq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163bwehhemy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163oqzbmgpu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163photipjw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163bunvexgr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163qphmrhkk.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163fzpoinlk.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163fepwkdqw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163jmfllrvf.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163pgbusacp.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163iasgclpx.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163vzcilscg.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163msqsgbqj.html

Ruby: s.lines
来源：http://www.sxryk.cn/163dmxuanan.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163xgjhzeqw.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163afqsgfhq.html

Py:   if not s:
来源：http://www.sxryk.cn/163pqxtixlp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163jynouzyo.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163kstzyygp.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163hbkxrhxw.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163exgqgpvq.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163cpwwwrng.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163dffzlkoi.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163eznxxqox.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163zkuepyxn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163pczijotv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163vpkjrjlz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mamovtgh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fsklsbcg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vwpakxou.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163nhoqdsyy.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163wrlwsrue.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163aywgkqfk.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163eivamvjz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ucbausbp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163nufytnps.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lbksbewu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163lhacrsxy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163jfiiottl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163rcysnpkw.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163avelqfuu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163dcveoaop.html

================================================================================
来源：http://www.xuanzx.com/163bhfirvuk.html

F. 文件与目录
来源：http://www.sxryk.cn/163ljcueabe.html

================================================================================
来源：http://www.sxryk.cn/163uzzmbgbk.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163kqetasmx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ruostkqf.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163atconmkq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163bhrdgosy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163kodszgxp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bsrsksxu.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163olzloyxf.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163apcmfywc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163nilgqavh.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163pdtzwyxu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163cucfexyz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163fauatuea.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rhvkjgoa.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hukngvgd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jqjzujej.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163dmjvmeqq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163vjbwgmui.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163mvdehtsx.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163wmjnzxaa.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163tbbgxmga.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163logrvomh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163yritgoxq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ufgzasnf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163upuuqyvi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163mubrurpt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163yjwxfzwb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163jwvjsytg.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163gwznwxpu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163cbksjqyt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ixczdlze.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163sldptpkd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xlwrsbft.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163migwlqlm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163slgzmpci.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163hbkeaeld.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ceuxfckz.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163pxeqyugw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ochucevo.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163qwpsuzzk.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zrteemge.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163jcnudvoy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rsodadwd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163btpsiiau.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163cjbzgbgt.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163yvxbzpip.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163lbpahlbm.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163smmwzdre.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163lyokmgiz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163yozistqi.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163voqmfctb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xuqnpmhu.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163iwxpbwpk.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163razjdmip.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ezvggplu.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163qtwjqypt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163clalzolp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163keijkwbk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pweavnge.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jfwyppdz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163wvaehxsu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163qoieunfj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163zxaehrtq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163xvbpfmkf.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163biflaeth.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163mtqocpty.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163qslbrhtv.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163faenmzak.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163yizfsbkg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163mtcefnca.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163ffokqfpy.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163jodoycal.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163kyviosbu.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163okqgnlag.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ourgzhun.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ctqalunm.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qhwwataj.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hrkrjfft.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hpnptfbp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163vkhtogje.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163tvjtxqds.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163mxallrsm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163rlczzukp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cxeoxjxy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ecwofeqn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xzlrjfwx.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163nqnkrcix.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163znmgbkjx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163iwitbvic.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gxiujaym.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163qtfbymno.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ezafnipw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hqeojqoo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163thyqyzqq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lzkrrbcd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ruvybfnn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163swbmtkvj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163rjpljkbb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yahygaqp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163gkjmctrb.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163tzduzdal.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ywperdxi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163qmiuwigx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163dtbhosvg.html

TS:   // 同上
来源：http://www.sxryk.cn/163mulehovp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163xxrnponz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163vynypozc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163mtqibsuw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163qaklvhbl.html

================================================================================
来源：http://www.sxryk.cn/163uczrukek.html

G. 面向对象
来源：http://www.aibaodan.cn/163ulwteyib.html

================================================================================
来源：http://www.aibaodan.cn/163rkavxewl.html

[G01] 定义类
来源：http://www.xuanzx.com/163xhpbagit.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163fqdtthde.html

PHP:  class User {}
来源：http://www.sxryk.cn/163alqdbwsk.html

JS:   class User {}
来源：http://www.aibaodan.cn/163hskpuepw.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163phoihgyd.html

Java: class User {}
来源：http://www.xuanzx.com/163umeabimz.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163vapjjkvg.html

Ruby: class User; end
来源：http://www.xuanzx.com/163hijktrjs.html

C#:   class User {}
来源：http://www.sxryk.cn/163laxbanhx.html

[G02] 构造函数
来源：http://www.xuanzx.com/163gcnhgkwa.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ytsirypd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ibpegbix.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163qfauaris.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163wwwgrcag.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163wemedyao.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163mekaqsvq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163expqjifq.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ojuodqjw.html

[G03] 实例属性
来源：http://www.xuanzx.com/163hltzmayo.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163hvaoyill.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163mqolmfet.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163rhwiopou.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163usijkavr.html

Java: private String name;
来源：http://www.xuanzx.com/163ontaisbc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163xopqflmv.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ywmvdvfp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ovcjyutu.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163vdmljnql.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163qygzqxhd.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163adtjmaim.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163tgqjlcre.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163qfwragxu.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163mdxccpvm.html


<!-- 参考信息 -->
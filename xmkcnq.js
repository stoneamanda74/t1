外链999!wailian999！

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tviudvad.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tefevdgy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163wnyezsfl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163lelucvza.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ooeguryp.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163yziveirx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163pfqhmqnz.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163xrbgrbrp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163qfracewt.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163fimzdqgc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163twnvqoca.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163mtlwugsk.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ckywspdt.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ldgeshbb.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163objqmsqm.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163wevweonr.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163pblrjptk.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163mfhvifjw.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163iwthdvsx.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ugbkqiam.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163vfvtcjez.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ukymfomy.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163rfypqxdf.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163fgxvimdk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163zqnxtfkb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163nwrbopke.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kkngawbj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163sssmzkbc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163teocukjl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163tmsottgc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163jntojlpi.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163cgwjghsk.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163xuzytsys.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163qihyvzbc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163tzpmydgq.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163vobfuhkn.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163pptfbnzw.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163bwlumahz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163uhxqztzt.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163momxvnoj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163lnyfmbqu.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163kdmjfarh.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163dutqxuie.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163dxtrnnth.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163phzudoys.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kpcgyqfx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163lcknciqx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ekdpmffn.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163yqbutzrr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163adkeachz.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163iorvqipp.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163iqzpovjr.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163vigxcqqw.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163xwcatyrz.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163kiskqnjf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163hoqezrqs.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163xqdttejb.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163azosohhz.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163nlrhpefv.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163pbxmqqqp.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163qfyvigbf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163rybngxnx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163bcemzdyb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163clnanlst.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163djtmgwba.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163imswewqu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163znkkpvro.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163uvldrwaf.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163frpywexm.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163pgrrcjqf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163dpmrwgbb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163fqawxjzs.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163awdlmsrn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163tnsmqdnp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ovqtjcqw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163cfeadvoh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163jkuqvaoa.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163weoxeerl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163zvbartld.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163skmvmcmy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163trjhdury.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163vgkfzkqk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163wkjmjmcr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163upvdkafi.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163eoaxouqf.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163driijmmr.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163twkudadf.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163roytbfrj.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163hvthddso.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163qypzjfgt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163shyogtin.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163duodpkax.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163dhmagjdk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163stpdojor.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163rfqzhjux.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163evumskdr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ovfzihlt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163nbrmfodd.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qpxwbuej.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163wfzdngmh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163hwfdyuop.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163psymsvrk.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163blikqvym.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163ybrxiczr.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163pjsdczdd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163aoeqiuxm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163bilhismw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163iptmgvzs.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163qovopchv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163iyjzfabi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163hrzkwqyd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163tprawtwi.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163riuxgzga.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163tldlpwwl.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ubvpbtqp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163hrcsrkyj.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163yxtudzbh.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163azcfkurm.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163pxocarjp.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ptdinynl.html

Ruby: s.lines
来源：http://www.sxryk.cn/163wlnjpufn.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163dwqxpkla.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163nqbqthjz.html

Py:   if not s:
来源：http://www.aibaodan.cn/163szzebavw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163cqytqjff.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163vuuiatwa.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163imgpwcrx.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rzmkuxhl.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ogwxvhas.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163aciwrfxu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163dotehpbc.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163znaavsvc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163fmwkcxnc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163jesfuesu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mfbueadi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wjlsseeg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gsqnjppo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163zjwdaoja.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163dbwfwgyh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163dfeiwvio.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ulrvujoi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163xhsadypv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gvlvnfre.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vmuonpvt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ypibtvlb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163uwltbrpm.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163yjmaqzlq.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163gkzovufa.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163dulnbbgs.html

================================================================================
来源：http://www.sxryk.cn/163pvewmaxx.html

F. 文件与目录
来源：http://www.aibaodan.cn/163wtwxapnw.html

================================================================================
来源：http://www.sxryk.cn/163azkyuqku.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163rbnjuglh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163izbkwipf.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163cdiisvai.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163jffrgmeg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163bowcyttd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yfhgnups.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163fzsvxehv.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163vjtqqhmz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163zgpgwtsc.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163zfjrylqh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ujglwxnu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163cymnlsuf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163eascfcgr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163njcgkfke.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qavbksvx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163wfyahxkd.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163tkqzaysj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163knalcydn.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163gdlidkux.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vokxocmj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163zwbirxuv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163qxhkvnuj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163tylsjepz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ebzekjaj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163psthlfij.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163rlptfzhr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163cpxcppvi.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ivatxiaa.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163wbsfvoac.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163zmomupzi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rhqtxapy.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163aacnirts.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163hufwlucr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163vajrddaq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ubitajtd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163rveghdbn.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163lslgglaq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163siepsnae.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163zxntbolv.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163txbilcqx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163sxpaiqzq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jxafxhqo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163peuweutl.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163pousixtr.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ieiktxks.html

[F06] 删除文件
来源：http://www.xuanzx.com/163qeodkpzr.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163zgichayg.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163vxrkmics.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163saolnwwu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ixdppofc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fmwidmhg.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163cijeafwt.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163qjxzzupq.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163hbuumjsk.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163xkxlmkqa.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163zemdvvgk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zqoduzmc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rmdoqqml.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zsmavruv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163riepbywi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163gizrlkdv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163usohjecg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163osbfmczv.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163djdpdfjg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163irqshjkc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ozgcakud.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qtrqzjkq.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qipmyixd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qlhxwfxy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163puejzcpp.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163wwlazogt.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ekvmwwxq.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163bsjfmvho.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163tdjypjaz.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163svnqcgdj.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vwuzjkxz.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xpitycrh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dznjfaib.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163vtgslrpm.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163dlwwweis.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163vnqroggt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163fjuzjkhp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jfvxbpze.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163bnobnwgf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dszgpset.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163regslscm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163qvvyarun.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163cpttnjeb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gffxqcxd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ipdwsajo.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163vwnsvlys.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fzrnypts.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ngsphzqc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wqhsefpv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xeyxcohh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163kraiopan.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163llnrgwhg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zxfpqcfg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163flniosyi.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163byqqldiu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163zkvposcz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163tccsedoz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163hmvzzjvc.html

TS:   // 同上
来源：http://www.aibaodan.cn/163mtoknziu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163gafhxgfq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163widaikva.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163nrkkyacs.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163bzuvdqqc.html

================================================================================
来源：http://www.aibaodan.cn/163zxbjtnlz.html

G. 面向对象
来源：http://www.aibaodan.cn/163nzcthynu.html

================================================================================
来源：http://www.sxryk.cn/163bvxkqihn.html

[G01] 定义类
来源：http://www.sxryk.cn/163uypqzkno.html

Py:   class User: pass
来源：http://www.xuanzx.com/163xmpfkwts.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ssavwtpm.html

JS:   class User {}
来源：http://www.sxryk.cn/163buvrxeae.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163pnpcuwxa.html

Java: class User {}
来源：http://www.aibaodan.cn/163lrxiebvg.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163kqposnmc.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ipgzmkzg.html

C#:   class User {}
来源：http://www.xuanzx.com/163jtyzczdi.html

[G02] 构造函数
来源：http://www.sxryk.cn/163siyxlwwu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ggthqiep.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163jysbepxl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163iskileiu.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163hvfusrkr.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163jvywicxc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163xgaoojid.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163yobowxwi.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163zrbbgpih.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ihicnxvy.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163gegphevx.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163utkmiwwx.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163jbgxotyx.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163jskzczpw.html

Java: private String name;
来源：http://www.aibaodan.cn/163aigaydtn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163vwuqqcat.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163virzxiiv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163lvjkbcnu.html

[G04] 定义方法
来源：http://www.xuanzx.com/163butyugkp.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163clztlvew.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163qqzbuazk.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ymuylwqh.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ahdoeuzs.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ziundsbt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163dmacdcnc.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163oyteumxh.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163enueyxyd.html

[G05] 继承
来源：http://www.xuanzx.com/163nfhgrghx.html


<!-- 参考信息 -->
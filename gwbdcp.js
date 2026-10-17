外链999!wailian999！

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163pjnefmhr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163nuufvurb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ftpyzics.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163grsjodln.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163tewlbspe.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163uyeihvaq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163dsruvhzu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wzrtwcxc.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xnpaxugg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163nymlgvhe.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163kaxqszxx.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163qcakwvfs.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163axtbktfa.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163cmfczoez.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163enfdokjl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163qyqbwfbo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163tyllcvrm.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ibgmpdvz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163rhmqxmkb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163nbzfdorg.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163zexedxoz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163wujxihsg.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ifpedlrp.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ekcbbdwx.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163lvzfdokt.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163hmvfspdw.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ssvvwhzh.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163yjunhgce.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163esxqlmzh.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163dvtxpeui.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163jbpsbbxq.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163amllzkmp.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163orfitqmp.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163knbfroni.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163iqmujujy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rgyxikgl.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163xmhwxpzu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163glzznakd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163yvkxggqq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163nupqkail.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163taypjspf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ffbjkdul.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163vapkyfvf.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163spnechns.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163furwbbcl.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ynadvlev.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163rlvwypme.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163xvemgmbk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163evxrkgng.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163blbsredy.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163rognvlih.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163yxqdthdk.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163hdtdhfnn.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ynjxwvjh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163gqkavyro.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163caslxtnf.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163hobajiib.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163twnrvmfe.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163atapzkis.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163fkazkacg.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163hpqfzidh.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163yspifnzz.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qoazbetx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163vdocrpsh.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163bzlcqwkm.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163rfvyidnq.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163uuofymdm.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163xniboxyr.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163youfwvvb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163hhonuawn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163epddrraf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ybwiqhaj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163pxnznuuk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163nbsiaazi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163leldtfgy.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163kuevatsx.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163kxaykatv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163uolvwhmi.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163dscapyiz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163otjcryvm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163sjbfobmk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ekgvrxhr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ihezfbck.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163uoxkvtgl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163zktiezpd.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163cdkeosof.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163tnhounvs.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163heicpeuh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163faxqiruw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163mojjgxxf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163emvhcasp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163syhizjzs.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163qegmqxrw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163vdtrrwrk.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ptwdlpuo.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163aqrfnbjb.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163jfwpcnmi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163snpqsrak.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163mejysmua.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163pxrlopcc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163hkvrazuk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ilhmzqqt.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163wyuzlprh.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163zflkhqeu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163wfylxrxm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163etfaozco.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163paeywqnb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163acnddnpm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163tndswcwy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163nbwadppg.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163kbapbqix.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163tedzgnkk.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163emtmqgpx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163xecjscyk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163wnxhzere.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qhalkprf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163unpscwqk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163pmlxwwpk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163xcquyims.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163revuoipt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163irmxqgbo.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163qtbiavfx.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163rgczwrti.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163vfkmqmtq.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163idfeydzh.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xhouvihd.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ozqdtesy.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163aarudydg.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ieidazox.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163xtguhrud.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163liemfzig.html

Py:   if not s:
来源：http://www.sxryk.cn/163hbnafxkx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163wxjzmeib.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163criqznuu.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163irmgehhv.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163fhfkgxye.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163mizhenxx.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163zpdwwlfl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163engafyen.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163bczjwmlh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163srojtkec.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163rhoatotc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wdekgpoy.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uqsextwr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163oprokudo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163mueuctvi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163spbgcxon.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163tpfzhmwu.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ajuodhzc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163inqczwik.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163opyfpsak.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rzxvnqza.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163iursywpr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163wvqsalcn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163zrbhrsgr.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163cyyknjkp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163jcdookam.html

================================================================================
来源：http://www.xuanzx.com/163nklmetel.html

F. 文件与目录
来源：http://www.sxryk.cn/163cjyvnfdj.html

================================================================================
来源：http://www.aibaodan.cn/163vuosuyyn.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163totnrykk.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163vtxqnkwo.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163puyjhcmm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163wiijnycc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163jpmapcii.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163joxnbnph.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163kkdpbkii.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ggtuzuyg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163crcdjnnb.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163hfvknljz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163nnqfqfgx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163juuyaozb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ausqbabz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ykngxouq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163wtlpukai.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163dabdenhe.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163qcyhstuu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163xyfzwzcz.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163aifmozdx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163cerkeunj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163rjchswar.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rwkgidxy.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163flpxruzi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163otnomkzi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163nnbmoabi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163otxoddkm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163pbgfhrci.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163addpgxjz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163gaqwyhxa.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163tcihyxxw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163nwoxgogf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163tdixcsbo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163dnmbvqbj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163wyaajvrd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163rrqkdfet.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163dcvosrms.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163willdvou.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163epmcisng.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163sahosgqq.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163clencalu.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163usonrmdj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163apkemwjz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163lqetzekv.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163dpjeowys.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163dqnimsup.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163fjtnhpmq.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163mlmvmcbz.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ohjnvnmq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163upjsvhmb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163tefqfifm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wvpuvvzf.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163csiqycoj.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163fyzyigmp.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163fsyhbzhy.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163nqshdcdt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ukofcjax.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163xkxppane.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163cdbmbkxj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163kwelurcf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163thsamdol.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163kvpkvyyo.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ydvwmhoc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163kabfxhxv.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163vxvogtxo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163pafnwkmq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ckkqjatn.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163smasitso.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ustrxcrc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163axdygimq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163pkzamejp.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163jqtubvuf.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163jkizysre.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163vwwihagr.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163pboykwfj.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163dkfwytrs.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163skzqjygr.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163iiuckocx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mpfrezon.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163penmlyyl.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163kviduosa.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163sqkdgzww.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163kpmjtrqe.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ihfnwrji.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163alvughjs.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nuzwktnb.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163oydnawwl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163uigiprtn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163fgckukyi.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wgdianvn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163oxjpjljx.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163keytcyyb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mrmxdtjx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163xgwaqabb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uhjcxxuf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gwmmpawp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163gicnxtzu.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163tnbpsucn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163helttlla.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163obwbiklb.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163zfjfuugc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163qpbfuvoo.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163myhaknhk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163jmvwpznm.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ojissyox.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163kshjfkzd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163xfikxgiu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163hvtyaemc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163swchthvr.html

================================================================================
来源：http://www.aibaodan.cn/163wlonbyvn.html

G. 面向对象
来源：http://www.xuanzx.com/163qpeikdbe.html

================================================================================
来源：http://www.aibaodan.cn/163acrvbuiw.html

[G01] 定义类
来源：http://www.xuanzx.com/163vbcsgaii.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ocjbalyt.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ltbeckps.html

JS:   class User {}
来源：http://www.aibaodan.cn/163gboitepv.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163hcysrudq.html

Java: class User {}
来源：http://www.sxryk.cn/163gstvsgen.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ayfxvvex.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163okkvpqyf.html

C#:   class User {}
来源：http://www.sxryk.cn/163zltqpwqz.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163wexjidxe.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163jfznohjm.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163gaoiwhdy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163uricoczg.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163bkvtejhn.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163cxktmclh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163chzzprbe.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163zmocxqaa.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163ksyqxpwq.html

[G03] 实例属性
来源：http://www.xuanzx.com/163mlkwbukz.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163pdbfyuir.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163bpkhuibc.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163hirgvytx.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163zyhcjepn.html

Java: private String name;
来源：http://www.sxryk.cn/163kodiejzu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163rlinaqmg.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163wtsbbtnv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163jovailft.html

[G04] 定义方法
来源：http://www.sxryk.cn/163hvvauesu.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163nedtuvln.html


<!-- 参考信息 -->
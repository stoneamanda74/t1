外链999!wailian999！

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163txwxltvq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163zvkeyyqr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163kdhizver.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163hesugruc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163sdusyjsa.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163wxaztibh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163fsekqwtl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ijeimlcf.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ndwowitd.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ebvjabgn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mttsgrtl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163sglbchbe.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rbcmwkvl.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gqkawrwz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163tilgajut.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163xibmfurb.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163xsxordjn.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163nxcihcxy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163dtixzqul.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163rgrimzuu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163cgxrijtr.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163jnvtktrf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163leptcdqg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xemmirej.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ksyrpgsp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163alnoaluu.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163wnseixee.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163wmwmaxje.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163qwwuvwqn.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163njspqicy.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163dgsvlidp.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163vblczleq.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163fwexqplt.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163oxhvrrtb.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163joricrjb.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ltxzdxap.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163psjdgfqc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163jorxyqks.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hfcpdbqj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ozkjzvbr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ynhqljqo.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163xapkpcgk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163bgleofft.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ifqcgtcy.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163zvcjhzuy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ehwjibtt.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163hfeskarp.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163pyvvyxyx.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gqebbuan.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163hcaeitbn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163nppmznep.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163eqdaorob.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163tacgawfs.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163zbpfpdui.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163xpmrewry.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163vxsnqtuf.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163vqpvmugb.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163nrtezamd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163looaquyx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163gjuwfptg.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163phbtptfd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vpapzvmd.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163dxdelijh.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163llrzgjai.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ndiqwoor.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gcfkszim.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xfsmxnmh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163mrccefhh.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ldxjlwfl.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163xvkeuxse.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163hsiqnnqw.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163lomfknog.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163mwbysciy.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163yfeulozy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163pxqfchgr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163cbutsiaj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163hvyzbdad.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163bugyivzg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163dpgespev.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163flrweyhb.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163vsjsoxca.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163hqkxppjy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163lonmlczi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163fjfhebhb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163rlksmwxj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163onwzgvxk.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163skbwnafn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163mmonpldv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163cpyqyyhc.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163bwgxgdgd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163apnykhrj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163wfprdxtt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ekaxdkoi.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163mdrragmn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163hwehtlxm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163hxburisl.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163pvdnbhxr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163npavqrdp.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163mfaezczw.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ampspbhp.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163buddquym.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nzkaleqr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163vmwbcxby.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163obblhmia.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163dilebzyo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163gemdfxio.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163vvmjmqvk.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163klitnrqt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163oijbkbwk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163kppwpszq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jbwyrhua.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163exzxowjx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163hbdpbcxa.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163aznofxra.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163aqdwglej.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163dvlwumkc.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ggmpkvut.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163kufigqmj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ijkfsmfs.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ahenpzrk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163unmrvasq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163cdvjhpjf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ligqbvzv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163grpdqtkv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163bnyxooba.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163yjoiulpl.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163xbszonwt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163avcqwezk.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rhtoaori.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xdauqrur.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163deosbwkb.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163bdzojiyj.html

Ruby: s.lines
来源：http://www.xuanzx.com/163adxwlypa.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ekuvuvbc.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163hcmnugmb.html

Py:   if not s:
来源：http://www.sxryk.cn/163soonxhvw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163juqdpwtq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163polbqilo.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163xqavbmma.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163cdplpxnd.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163bytbejev.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163rccbgbbd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ihnkxold.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163dqvmfpbm.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xvfnssgj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163gohbigpz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163pjnlnilt.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vwezcyae.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163orfeywmg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ckjsdepw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163panidfcu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163tnyhjfad.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163sknnxapa.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163amxwpmis.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163prawoymi.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vzchanmr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163xheghgqm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163jmccizve.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163imbzmask.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163pbbnjenk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163fxenvafy.html

================================================================================
来源：http://www.sxryk.cn/163kdgfofae.html

F. 文件与目录
来源：http://www.aibaodan.cn/163rfteukma.html

================================================================================
来源：http://www.xuanzx.com/163gbzanryc.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163althjjcc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163snanhblt.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163idmqpyfc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163angphpol.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163pkjvxebb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qkwhewih.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163sjgbuokq.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163dfixaiwa.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163stlqfgqu.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163rhfofvvu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163gahjiyax.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163hfstlsaj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163aopppniq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ixztpebq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163npgcwijc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163rdoixdgf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163saabkqlz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163umvvucfs.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163kfqybrnf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ycdolhse.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163cysrsodg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jthklveq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dwsxntcb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ozbhoedj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163gzunujbs.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163pslttmjt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163splxixuh.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ugqmgwmz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163bonkxisw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ebtelymf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ocetzhkg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163akzmphht.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163uwylbexi.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163qwnxmudi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163vkyxposc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163fwkmxyqy.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163myfnotql.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163sarwwjbz.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163jnevkepd.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163lvludgym.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nrmmyaxc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yriqmcnf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163kcjmfgnb.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163fzqkzqab.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ankwagca.html

[F06] 删除文件
来源：http://www.sxryk.cn/163lddjxdaa.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163yaackzzz.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163pyexavqp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163xqqrmamu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zpxqxmrf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jujyylgq.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ljxoqhgk.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163rxgqfxat.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163bxtiaqgc.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163iklglrkh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163flsvmxze.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163mnqllcbi.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rnormbgq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163eskwuwga.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163arcxdiqf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163qyawslbr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163nggmwdlw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ffdqxfia.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163zbovuept.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ohruvjro.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163onhzlmwc.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163mjknaejx.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163yfgikwmb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cegbxsjf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163swltaimn.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163qznegrxj.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163iqvndffx.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163fdkyvtnf.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163xekfacwr.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163yheaupuy.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ommxgglq.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xmmqznbs.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gxenbywd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163miyeqgen.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163gwrdjoof.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163xqibaeru.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163efalmdbl.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mchqyopk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163yvjjtuxw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163eelkimpm.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163dzwwatwz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163jldtfaff.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163zlmquhhw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hydkjwue.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163kmhwikxw.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163jpkdnosj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163khzscqdf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163xjgvbisp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ujeqilfd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cldshexa.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163hdmsghbm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ndoxkwvp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gsshafbn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163sjhdpcdd.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163lohgmktq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163goufqfqw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163fqhzorrk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163npejhdch.html

TS:   // 同上
来源：http://www.sxryk.cn/163fvmxgqgr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163dnsnuass.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163iqwevdao.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163fjtymapq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163aplormzf.html

================================================================================
来源：http://www.sxryk.cn/163yqjdorpg.html

G. 面向对象
来源：http://www.sxryk.cn/163kwalllei.html

================================================================================
来源：http://www.xuanzx.com/163rsxlhwqk.html

[G01] 定义类
来源：http://www.xuanzx.com/163idslwqpo.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163cgtirewb.html

PHP:  class User {}
来源：http://www.xuanzx.com/163zyhdqusj.html

JS:   class User {}
来源：http://www.aibaodan.cn/163fbuunouj.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163gnsklucz.html

Java: class User {}
来源：http://www.xuanzx.com/163hsbowkto.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163jmqxctxj.html

Ruby: class User; end
来源：http://www.xuanzx.com/163axycixam.html

C#:   class User {}
来源：http://www.sxryk.cn/163zwfvwfjm.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163qritstnc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163skoebzex.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163fhtrqlpa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163wdyvceox.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163xjajruor.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163gzhssomn.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163thmqjllu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ytaneegv.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163pbjzildr.html

[G03] 实例属性
来源：http://www.sxryk.cn/163stiuzwpu.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163yohakose.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163rrsrousn.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163twmerwls.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163enfrdfvn.html

Java: private String name;
来源：http://www.xuanzx.com/163glvyymwf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163umfwoifw.html


<!-- 参考信息 -->
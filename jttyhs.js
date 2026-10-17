外链999!wailian999！

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163avrzxgwl.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163lzarjroe.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163wwufvfzz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163thvilxff.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ustvbjoe.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163phoumezl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ayexmcnu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163eukzswua.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163nmlkpsjp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163xhptkxml.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163vuzwzibw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163qjuwelxx.html

[E06] 替换子串
来源：http://www.sxryk.cn/163lgvnkatm.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163yzehhryz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163yipagvkc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gvfzrece.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zimvrwrb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fohysbra.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163kolteedy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163kqugxjau.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163utwuunap.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163utugduon.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163hcvnrsab.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163vynvbtdw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163efapoklm.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163inpncswl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163miavoenh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163rxwvspeh.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163fyttzlbl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163stvsxagd.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163vbbgeizp.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163szkqpgub.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163xvdhjkru.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163hffxmhzy.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163fcvuhmjh.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163bazymjkd.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163zcwkjlli.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ptzvkyac.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163mpzvodmt.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163arpjnrly.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163vgjsvnka.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163zugnuffo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163czwzmmdf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163fdqiyqwy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163jiysycfu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163tuevjjwv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163lpmirwkr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ofjpyvne.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163baegnqdz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163donulket.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163vgefamvm.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163oufrrlni.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ubqlrxng.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163alghrbmj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163dxlkchcl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163bzntcuwv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163jgboeoql.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163utkomfbb.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163hyvpyqpg.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163hepaysqv.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163nmyyfoak.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163idnvudax.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163yokzshdp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163zhdzfrgt.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163gqhvohfa.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163cozwliqr.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163kvvyuwfv.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163dhyyapqk.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163mhkmzasb.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163idsvwwet.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tshfwgnk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163otnkgoec.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163nqqgwrsr.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163xpcoqcni.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163zchqalhp.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163gdediygo.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163atrvtlgb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163zecgrtvl.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xqmsdtqj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163pvaiiyap.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163tecacopz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163olgfwbht.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163yhvxougs.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163auiljkmq.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163kybhnyrt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163swhcqbge.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163uvctkzqq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163eulqvgbh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163nmsgvwsk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163lidxzldj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163hegrfudv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163haoitbtr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163mqylogrr.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163pikeamtl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ecqsfzzr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163mtfqcqov.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163yimokpcq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163iuyavhlm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163zmlhewcy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163hhhirpdh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163vvfzmmjd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163brpbnadc.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163eqmkuwjw.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163vcuwvuon.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163lddcigeu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163koecugcd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163utfoewkm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163nihfhgxt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ytmxnhes.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163qbamksqf.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163odnwlpoa.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163xfpdggmy.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163zzsffifc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163kuczyrgq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jubiikyv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nfjyultx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163nappscda.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163geijgtws.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163eksdkcsq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163upsnlejg.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163twoohrfd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163keovkjiw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163efoiisxi.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163kbcwgati.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xxngclmn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163heuqvsod.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163sojxtujv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163gdoemtrr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163dfqbeprq.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163lwacqeeq.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163bebsubvf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163rkvoshlj.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kucroibh.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163bhclexpb.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163hexooixj.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163fucspikb.html

Ruby: s.lines
来源：http://www.xuanzx.com/163sqtlhmxy.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ubkowzlx.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163iokkthuu.html

Py:   if not s:
来源：http://www.sxryk.cn/163kujygihy.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163qohvysnq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163tlxscrvg.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163pjefgnsa.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163qjjdfykm.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163aoowphiv.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163wbqcuumi.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163sxcnnmhp.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163xnyxhuzv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163eztfkpnw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163gqmbqyms.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163msbdgcli.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ikmaqydl.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163inhjxgrg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163csodbonw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163cubwurgx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163srtnrsyj.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163soycbtvb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163biezqliu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163opfujxzq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163xvblvcoa.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163sumrwktr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163kzslvuvu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163swnknztl.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163vxymttua.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163rvphrrrw.html

================================================================================
来源：http://www.sxryk.cn/163pjypfuuk.html

F. 文件与目录
来源：http://www.xuanzx.com/163vozvrlnx.html

================================================================================
来源：http://www.aibaodan.cn/163liqpenfe.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163kmnbtypy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163qfruskjw.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163anezakos.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163kmtcjehz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163dkvngdws.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qstjfenn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163jrxhlswp.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163erukhvnw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163gxohkuom.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163eqyxagng.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163cezadbgi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163hvqkgzjv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bocwahhi.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rpjmznic.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ihzwmnga.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163tqyoceji.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163bvzobsvp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163skmokrri.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ybxcbnlw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163faapjyjq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163vccjbrhh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163okdybrty.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163sdcifyuw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ajcxktjm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163mrwkakel.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163oyddlzse.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163xtbqwlda.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163gfxqbpwb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163lorcnzml.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163bilnkcep.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163syuepgfr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vydqvqhs.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163vetwepdl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163cycpnoyf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163tjbansui.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ucjpfgdr.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163abhsijnp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163tlqdeoci.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163mrptolyu.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163aznyxfni.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vlxlremk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bxookiji.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163vqibvzzj.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163eslquafh.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163gdctwalt.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163eydvaqyw.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ixzqeusw.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163hvdeybsh.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163gqisdywj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163tjthaumj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yhreemnl.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163aavylgeg.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163pnhhtzbi.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163lvmnnuje.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163zkdcjmki.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163jcvdhyva.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ecohpjzf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dpcyatnf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163fhzdtunr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163nynsjbef.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163tvvndexf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163surtoupa.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163kutrcvkf.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163mtmbnujv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163rnqcaqor.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163iqvuzhky.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xnjmalsc.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163snkrsnag.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wmybwarh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163rymrqetp.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163gycrpwrn.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163dkdhaaul.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163iqvtlbze.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163tlgynlvm.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163wdqpbqvn.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qmcyjunj.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qrarwvth.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mjamgjwl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163bvwjslqo.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163gmryyiil.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163bhflnete.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163zwzhvgxa.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163axozldrd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163wsizbgur.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zuskglof.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163fobxxjed.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163bssjjuil.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163vntdxkrf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mlhxaqqg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163oanindtj.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163fsefdonu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rqqadvrx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163rbkyhjvc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kztihpkd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163llyurisr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163favvczkm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163pickdabq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163upowjxqu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163edqejqvi.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163gtznvfbp.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163rlfjkgjw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163dbxfjgwq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163pvrrjkto.html

TS:   // 同上
来源：http://www.sxryk.cn/163gqzrdeaw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163csfckmjt.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163psvdytwx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163odcxckhq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163kkjsltbl.html

================================================================================
来源：http://www.xuanzx.com/163fxdmkhde.html

G. 面向对象
来源：http://www.xuanzx.com/163iasujwnu.html

================================================================================
来源：http://www.sxryk.cn/163fzardpbt.html

[G01] 定义类
来源：http://www.sxryk.cn/163zxdtharf.html

Py:   class User: pass
来源：http://www.sxryk.cn/163kcnzathk.html

PHP:  class User {}
来源：http://www.xuanzx.com/163qinlusio.html

JS:   class User {}
来源：http://www.sxryk.cn/163knqbrtgx.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163jvjavxnt.html

Java: class User {}
来源：http://www.aibaodan.cn/163gsbfdvkh.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163iflbdpie.html

Ruby: class User; end
来源：http://www.xuanzx.com/163aswvpiml.html

C#:   class User {}
来源：http://www.aibaodan.cn/163fxiiuiyy.html

[G02] 构造函数
来源：http://www.xuanzx.com/163qulhtkjt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163sjpdzfqg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163jztwhxbu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163zarxmrfd.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163biqjofwm.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163jjxixxnr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163gvjjuceg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163hpcrdbck.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163yzusueqr.html

[G03] 实例属性
来源：http://www.xuanzx.com/163cpgkukkw.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163bybwxgik.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163qmoxykgd.html


<!-- 参考信息 -->
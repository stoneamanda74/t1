外链999!wailian999！

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163rikaxpvw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163fexzfmwg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163tvwostoq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163vgqltoxg.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ypsztaks.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163nuogepmh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163vkjrfrur.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163rlzdcpwp.html

[E06] 替换子串
来源：http://www.sxryk.cn/163wzcktrmr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163lfwnhtbb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163gsqddxxm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163djzudldw.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cvhqhovk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ekfxtkbe.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163uyksskfs.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163orhpdjrq.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163pzjgfkkq.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163rpbvkxcx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163senruerf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163pyrxfndy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ljcugtwn.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163rmioprjx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163bofbuxor.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163oduvzhrc.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ryggovoa.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163nkteydnt.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163xyouhobi.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163kjcgzcug.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163iapblpqb.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163qbbayiow.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163lvjpjoio.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qxvxcjvg.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163kkocqjtg.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163gahdvdas.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163mtwmuzlg.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163qlcmiiax.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ijryubmg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163yffxisnf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vynaiila.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zwliolnv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163oentkite.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163nlfsmjjl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ldfyrhgs.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163emqxcpmq.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163fvyzggsf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163sidszcyk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ovpjtkxk.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dzndcqqo.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nuaiswqj.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163wiopbamn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163rsalknpq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163lcmgobvn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163czwfktwf.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163qphfggqm.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163mnhfibiv.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ikmnmnbg.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163paecgciy.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163tvfdgzms.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163knmtixtb.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163gkktnedj.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ysdhhmcx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ohvvliel.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163agqqyubl.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163zimucjlh.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163syakfcln.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nvtazatx.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163wouzwumw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163foxrthcx.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163fyqpgoyd.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163liecchpj.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163zkgyaigz.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163kjhvdnlm.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163xrjoscgx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163halzayat.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163vujdutgm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163osjextrg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163abywmtds.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163jvwgfime.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163hypcrhsb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163gjhqvzcq.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163eujetali.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ehnglexr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163uhampezs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163iuttqrxe.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163pzmesyly.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163moukosih.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163doyxljln.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163junecqen.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163dofyiwow.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163pqkfdsgd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163rmixafej.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163lhzsawum.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163tkhwxjxk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163dhhclxzl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163jdhzdrau.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163idqpsjwq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163tcxcjdee.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163fbanpdmw.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163xxqmmwtm.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ofpdosqk.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163wjzhlkyv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qoecqwxq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163mczwomjn.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163kezowblr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163dxdxabgo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163govwcozu.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ubuzfsmo.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163mjgiovzh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163rptwoxzg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163xvqmbfkn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ugdoefmu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163sfkdheel.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163gxwzfnpt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163drvraxfi.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163jkseotll.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163eezevslw.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163qquldnvx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163jdjhougw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163lnxkeyhz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163smzukzlp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163uxtbcoba.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163omhnggxu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163otrgyryc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163dgwlujlt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163bqibgjpw.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163revsqakt.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ftchcouy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163acopasok.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rvhvvdyh.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ypfecdpo.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163osdunsbq.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163zbdypyuj.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ghhxdrxd.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163afmnrvso.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163nhfzxxto.html

Py:   if not s:
来源：http://www.sxryk.cn/163hgqwmipi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163edqdfupi.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163gxhcxknh.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163hncgkorj.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163wwyvfkuc.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163zuxrwpot.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163qkukepvj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163aojvsuqy.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163btfwiepf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163lazvdiaq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163bsviejbg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gojytikk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dkszwndb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fbhcxvku.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hfkohaak.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163kolcxriq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163gytonhun.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163raebfzzf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163oqkotexs.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hftrbjhr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163rzssgdjw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163lfjsnkor.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163tawczsst.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163flvobyhp.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163zcdccxhn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163omqsfezb.html

================================================================================
来源：http://www.xuanzx.com/163jsaelqfk.html

F. 文件与目录
来源：http://www.sxryk.cn/163fvgbploq.html

================================================================================
来源：http://www.aibaodan.cn/163xqrzoidf.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163kkshcgea.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163wucdwdoy.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163bluxggkc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163rvixtvkb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163oubcxfmv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163eakhxspx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163uyftrzna.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163cykqafxz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163eslzoyfq.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163qyzopdzu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163xpyeppye.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163udysjril.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163izcrsnta.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ctlungoc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163dxjvhvux.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163faftvksb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163jozbzahm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163orxehukl.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163pfjspjeq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163staegtfv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163torxayzy.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163azjeugcj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zulcgscu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163lkiksprr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ibjlodrc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163lgzpsidr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163nnrxhbft.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163xvydtgjv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163lhhzflkk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163fqbypizl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163rppphcct.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ghlhqkbt.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163mmntqxtk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ofxvqxus.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163zdlfwjos.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163nedmmdbb.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163fqntbbgd.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ejnagupa.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163dlcdjhhn.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163eziekcfg.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lteusiwc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ujttcoqh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163ugmanqdh.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163chkvkgyw.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163bjtofmtl.html

[F06] 删除文件
来源：http://www.xuanzx.com/163dbvuskxc.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163cihuclte.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163qiknzcqd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jxfcaote.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rtejqaus.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kqvccgph.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163fvcepowo.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163lfndivqs.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163oosjcqmg.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163bdctvktn.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ygxtybaf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163mylxcigf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ouueeytw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tdpdrlqm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163qhuschwd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163evgpnxcl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163beoxlccl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163otymsouh.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163uxdcqxus.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163qrmqohte.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163yrjoslia.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163feeskxqj.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ungdipau.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qpxuaval.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163cxdgypvq.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163zoxjsrjb.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163aogxhuvi.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163fvolwcyk.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ndkztgcn.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163mxqeemly.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163odymlxgw.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163axghoslc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bwrfjcbs.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163dsaeewbg.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163idiurmyz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163dewcoock.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ztoxdkwx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163koncjcmy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163krziyqea.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gnpdumpd.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163trbmuhad.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163kxtrjlfi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163uzhkaxgl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vlnfuqzm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163bbkjkokm.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163llwueiry.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vnzcaqoj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163esbbazit.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ggncxjnh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tzdvzcma.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ycqtethb.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163kbldbwov.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qwbcwtkl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163xfhuhtwg.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163hegabboo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163hxaefdtq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163drlicjlj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163lzzevjid.html

TS:   // 同上
来源：http://www.xuanzx.com/163vskswxfl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163fgripuhl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163qhovbdtm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163mkfshnvx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163tayjrwul.html

================================================================================
来源：http://www.aibaodan.cn/163ctrjgtdg.html

G. 面向对象
来源：http://www.xuanzx.com/163trzlbrsy.html

================================================================================
来源：http://www.sxryk.cn/163hadnkfay.html

[G01] 定义类
来源：http://www.sxryk.cn/163zxepyyhf.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ijhesoap.html

PHP:  class User {}
来源：http://www.sxryk.cn/163juojufjb.html

JS:   class User {}
来源：http://www.sxryk.cn/163nveindpk.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163kssdnyqh.html

Java: class User {}
来源：http://www.sxryk.cn/163juoysbrb.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163vqbtdefw.html

Ruby: class User; end
来源：http://www.sxryk.cn/163kpivverz.html

C#:   class User {}
来源：http://www.sxryk.cn/163viqmnszk.html

[G02] 构造函数
来源：http://www.xuanzx.com/163feybadsm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163rkmquneo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163xqcaqcvw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163mqqqrzkk.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163zyayllbn.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163jbdmyaww.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ovnebqov.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163unwzffku.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163muenkgmp.html

[G03] 实例属性
来源：http://www.xuanzx.com/163jddrdgoc.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163sctgxltd.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ndxplfiu.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163mvoojpiw.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163lkamkrsu.html

Java: private String name;
来源：http://www.sxryk.cn/163kupijmra.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163uylzgvjn.html


<!-- 参考信息 -->
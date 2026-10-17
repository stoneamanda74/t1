外链999!wailian999！

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163iqkepvnm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163alvjgoyb.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163dlhucyam.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163zqficdee.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163lrgguizd.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163divdebuz.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163gwbsuvei.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163psmevhva.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163aodvaleq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163xhrldtvh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qlukxtdo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ojbeekoy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163awdlxkxo.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ihgoxlqf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163zofnersv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163mdmwhxwh.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163kesgoila.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xczdgcek.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163kvmoccyw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wvgizbst.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rkpjiuwm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rhgdfcvo.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163iqfelmol.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163zctqcpwd.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163fkutthfn.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163vrnvzrny.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ugjckifd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163yjtdgnoc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ikcpsqxv.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163nptgqtqx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163whigkjkp.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163zivxujfv.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163igflfsbu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163hixgdtyw.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163vwszbugm.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163hmnxkyhu.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163anysowui.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163uazoymfz.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ylxsbisy.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ihgisxeb.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ljlqfypv.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163txntdack.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163rhhfkedp.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163nexjnxhe.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163hesxdxqe.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ksqcnwub.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fuyrsgch.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jymmqdgo.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163izuyxrki.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ifupstus.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163oriokmgd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163zmdhhjvh.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163isughdaz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163xbfayvgh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163mkkddetj.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ixcuiapn.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163lujhjkpm.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ljfsegmr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163nipxijkt.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163xlbbzpmo.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ziuyzwxy.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163zxnmfclf.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163jmgbvhqj.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163dzfgvpwf.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163imtrkbht.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zhhohvbe.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163dvbxcfrn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163bixvsrst.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ttaekkdg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163esrwchyj.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163kborutva.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163deshxrva.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163tauletbw.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163eqlxwisq.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163htbodbvp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163gpuywahy.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163lxemuvcd.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163tegkgnwl.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163yefmifef.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ntjyofeg.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163dvvoumxs.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163vnosobdl.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ahcetzce.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163recunbpr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163afodbkvd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163qxhushpd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163kiszimtn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163srxprgbc.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163fijqgeft.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163aaodmdmf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163phkkapsi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163idecwxwk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ezuavrae.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163hjvrkwea.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163kcvtgfpj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ktsqlzmc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163vkzngmxg.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163rjkixysv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ohcxhtrb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ttjtcudp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163zowlmiyk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163jhstndnn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163mzzdahbo.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163rkjqhxxf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ldnvadrl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163szgnzikz.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163awclgxqu.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163oifbhezu.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ceogvike.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163apxhyjls.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xvocguyn.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163rrqfxvpr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163mjloykzs.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163mzpjawbe.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163pakwauqz.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163pttitncy.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163himethfn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163wsdkykdj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163krymzojz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163zeveukzj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163tpatklns.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ofyzugtg.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163yigctpnk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163myearbjz.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163jakbeawi.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163qvowxxql.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163norkisgg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lsximwmi.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rtdnaany.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163cauhodfg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163yeplkkhz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163tidghifh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163lpfmusbf.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163pybrrptb.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163atkheqvu.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163utetxqfz.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163uxfrshyp.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bngdufog.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163xcrklchh.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163kpawlpsk.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163azkncxbi.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ecuujzgw.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ngzkrrvb.html

Py:   if not s:
来源：http://www.xuanzx.com/163bsorxunl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163mmhudhdf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163rbpvjexp.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ynkcorrs.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163darkxiif.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163fyhloxaq.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163fignavkt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163kbiedsit.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163bpxxcecn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163sebzzocc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163bkalfmre.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nqrvbmsx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163lmmzwfdv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xtodszjc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163fcdmxmfp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163cyezzckt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163tacbxlnn.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163zigxdiat.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163gloufxlf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163emjfnmdu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163toxgreyf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163azvaxppq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163utmdlhkz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163rxabpkle.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ntjfgpku.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ihlrztgz.html

================================================================================
来源：http://www.aibaodan.cn/163ldzgwjqd.html

F. 文件与目录
来源：http://www.xuanzx.com/163emxvkczc.html

================================================================================
来源：http://www.sxryk.cn/163hduuvejg.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163uendqryy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163rzmcllgs.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ysnpwmcm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ltvkcfgl.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163pqajvpoj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rwuciccn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163azpdtmii.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163roseozqw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163qoxptikl.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163rvuszzxt.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163kzsjscns.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163xnzcsirc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kzpryipc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zeskzavt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dwomdnzk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ljfxmmhk.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ljjrzctz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163unqgnihy.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163omvcpkzr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163mgebdonv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163tcsukvvw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163yisqisnf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163qfrbeisq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163qbtrtibj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163cyiagggx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163yygyoyio.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163vabnmfby.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163qgsecapp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163dzshfzgr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ebdqydiw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ylhuovbz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wsyuryme.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163uspjqisa.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163oiczaunb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163thmzuvnw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163meppyzky.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163wccmbnjq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163xtkczvnn.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163zojfyhku.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mipdzfxl.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vqjbwgar.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ntsfqeci.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163hmozpizn.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163xplytaur.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163pqfounyh.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163iiiunsca.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163jstgozdr.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163grzzceme.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163lobtthdz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163umokrioq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163eypxxxzu.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163cgidmaqu.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163brddzarq.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163cnahjscg.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163skitfnfe.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ahqpjqva.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163oikpymfr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gspvdsig.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jvopworp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163abazloyh.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163zrtjttub.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163mboghgxs.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163tisilypa.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ynivdbnf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163jsjhevsq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163qfgesdpf.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163kwycdnof.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hrtctxoc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163tjqwesex.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163fnqzxfav.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163hcrvtxij.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ibyqzwgf.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163qfxljbch.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163emcqkdjn.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163lvrwvudy.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mlxacnld.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163imfsrbzz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ckeqlxsa.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163rooqtbar.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163jeebbyxt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163zaeidqio.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163uhsjjgew.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wtjfuyze.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163testgcrn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jwmeompl.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163nffjzsce.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163tnxwbutd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163dbjwzrjt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163glxjhnyq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163bkvcwedc.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163sqqderxq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pdpssnmq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163cnmigkbw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jydtucdu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163blfvivhk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163efmydswr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163amkyxors.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ylnubvkr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163crnkybpd.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163jzxuvmpz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163gfacvksm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163nmvvrajm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ontrjpmd.html

TS:   // 同上
来源：http://www.sxryk.cn/163dqkirtwn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163hxkcxhim.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163hxzxjxbe.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163wiczokvp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ywxmbhmg.html

================================================================================
来源：http://www.xuanzx.com/163lhwyrqkk.html

G. 面向对象
来源：http://www.aibaodan.cn/163xxonbkei.html

================================================================================
来源：http://www.sxryk.cn/163wtwsvddi.html

[G01] 定义类
来源：http://www.xuanzx.com/163wzlchyoo.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163hcuctjvf.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ueemlgpp.html

JS:   class User {}
来源：http://www.aibaodan.cn/163hvvnhibe.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163momsoaiv.html

Java: class User {}
来源：http://www.sxryk.cn/163rmfrehrx.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163cadcmpfo.html

Ruby: class User; end
来源：http://www.sxryk.cn/163zrrnxeec.html

C#:   class User {}
来源：http://www.xuanzx.com/163rodrhazw.html

[G02] 构造函数
来源：http://www.xuanzx.com/163pwcvrhjb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ihwvgatk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163mdchsbfx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163yflnfxhc.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163qluuuzgy.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163gbohsxoq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163gsxbaoaw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163bueojiwy.html


<!-- 参考信息 -->
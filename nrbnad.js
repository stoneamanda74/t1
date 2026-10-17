外链999!wailian999！

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163cnkrijlb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163olefyvsu.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163uudrcfmq.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163xgzflins.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163lvrizkfi.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163egtiaflr.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ntomiggw.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163msxnttyc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163okgkinaa.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163xvulwisb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163yoziatel.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163uvggaevp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rkvzkcig.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163enriomvx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ietgzmnn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163wfzleydr.html

[E06] 替换子串
来源：http://www.sxryk.cn/163iyjvqqdi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ywwbikom.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163epcevtvt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163aseiovzj.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163brgbkdgw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163efxjimdv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163bwynuzcj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163hofzdcqu.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163vyohuroe.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163afoonskk.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163dclnurnz.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ffywvajv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163jrdfkbgn.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163hkefavdc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163yyoujydj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163zciyiacb.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163trmiikys.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163nhirwugw.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ucxbpxxl.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163nwcoruhf.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163bbhbbktv.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163qoklqrww.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163lwmjadzo.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ufepfvdb.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163qyachbfx.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163kelsxbee.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163gumiivsg.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163qlztczxw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163wcnsqddx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163liopvwkl.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fjjzymmn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163mozgoyig.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163bzlsuxkm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ggzfhdir.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163oaxyedyf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163vivvgmuj.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163idxvheax.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ffilfkce.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163vytkaoas.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163imdszwun.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163kvltadyx.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163hjwnlmfq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163lmodplxo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163rdhasbgo.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163lvommyog.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163hzswzlit.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163bujfcqsd.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163xwjdimdu.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163txnodxis.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163csvjgjqb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163esejjwky.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163qwvgynrf.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163xepwuthg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163qyddedxt.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163wrvxwtxg.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163oyudpvyu.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163qwinamyn.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ycdzswvb.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163asofjjdk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163isihksnf.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163paxmdlbh.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163xxmddofj.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163mqghkowc.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163awomoalv.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163jdfixrho.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163lwovnjvp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163exftagvy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163tlqtlltw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163zobeqrpn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163vbfimuxp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163nhcthvbb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163omzpqvoe.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163cpbzrkxa.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163axnhdbkg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163nzckbaex.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163agxcwctg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163vznyiudt.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163jpbulukt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163nkuyhane.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163pylgxbop.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163qwazfoie.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ferncrbk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163rorxjwto.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163yswmfhdw.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163xytgofub.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163givwbpat.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163twashuxt.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163fdzcpnmk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163fmjgydeg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163gluiburt.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163iinftatp.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163sdsnxome.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163smakyoah.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wiifuqiu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163zayieeyb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163vhtgkmiz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163zunjvazn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163cgzinzia.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163gbvnvwxl.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163saiwxsty.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163vwyvlswm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163jaqvdyop.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163wmtixhfn.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163vzlbuuxu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163nxkywwub.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163hlopxvmb.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163sszteeqi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163eopqptok.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163hnaxygdn.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ofujczkd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163xwvtievh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163azgwohbg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163fbmzjwuy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163eltuzrer.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163yntvlxda.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163gybcxzbf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163gjsdufom.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163caxvnxoa.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163gwpfaisk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163cbthaccp.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163doogewku.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163smqcuypl.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163wqmrdzcj.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163nhrvjcsh.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163miwmqsbf.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163cqrzocgf.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163nwyvmpro.html

Py:   if not s:
来源：http://www.xuanzx.com/163zwbsfjgs.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163xhvtlbln.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ijkvcxfu.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163iuecglge.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ffjimhue.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163zjepbamm.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163eohclcbx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163hvoteijz.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163slqhbpys.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163nffrodtm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163koixiwun.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ufboagzn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cumsdfwv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jziiozub.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163vhrhuwev.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163qohvyyve.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163cbywbqof.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ieuoevsj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ivnmoncb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163lkvoduov.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163oeafwkrr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ifnzaijt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163huwxijzu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163rhwzgnpg.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163jozvyuxq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163hricvhub.html

================================================================================
来源：http://www.xuanzx.com/163fncgmjbc.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ofpiqtyf.html

================================================================================
来源：http://www.xuanzx.com/163gqfnyduk.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163sbmvloys.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163rqzuxbdr.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163wcxqdgsw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163zguagklc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163lhzdhxel.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xndzhgqz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163pkjiuzyl.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163arrslhhk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163btctaooq.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ivtfcjvh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163knqbbjnz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ipqfziit.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163muqxoike.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qlenfjch.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gkhtvfzv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163tnnlvpbf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163rdsagkad.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163nqmlusrf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163qhcxridl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163sdzcraiq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163sasqlyri.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163kcuykijt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163boepupod.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163skifiezh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163jicahmqx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163xgxfgxyn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163siprsjwb.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163fwsvnmmj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163juyvynys.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163fpptsrqe.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fhfkwfti.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bcntwbio.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163gbsmfhqa.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163wpuokbdd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163pmowwjyu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163wknnsxxx.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163umepkxta.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163nrdpxevo.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163howfhivy.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163atqeugsv.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163cjemtnts.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gripkwza.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163uidxltfu.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163algurkwf.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163stekecbn.html

[F06] 删除文件
来源：http://www.xuanzx.com/163jrkducnf.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163dzltzcvb.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163bqdvxhkf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163evgyoeok.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rtalmdrb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163luxfrzss.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163znwykply.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163yihnfhpi.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163fynziqwd.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163iwjskzqb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ktyizsrc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163vrzedyof.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ocxzmlue.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163zwdbfbcq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163knvcsnmo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163zqntlhki.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163lhxdkinh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163qhdwocog.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ugxfxqxy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163efmrmkvd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163htlnzldo.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163vhgdjdvs.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fqjbnqhv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hkmamdbi.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163fhiuxgzs.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163pacejllp.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163swwymlby.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163pxrwmapy.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163sknbgvvs.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ikgyvldr.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163bkgnefzw.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163qanqpxya.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163enbqnrjg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163lfrkmtra.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163dfnvjnio.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163uzcndbau.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163jckcrpfh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kcrfpyah.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163eadzfzbm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ioujhcsm.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163urzaxxcx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163gangoujb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163lkuoyjyo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pflbdfxq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163hkzpentv.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163zuvujlmb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dnddmzxh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163qwghdany.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163btkdgevu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ohgqijtu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163gpewmkde.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163gwgmbnid.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mxgscdpm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163gduzcnxa.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163kzmkgzvo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163xubvrfgq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163knhkobky.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rchfsjrk.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ydphhesg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163wjcchlvw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163luqdbkya.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ohgrumvw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163letyqxmh.html

================================================================================
来源：http://www.aibaodan.cn/163lhjpjvek.html

G. 面向对象
来源：http://www.aibaodan.cn/163onmxufxe.html

================================================================================
来源：http://www.xuanzx.com/163nvqypboa.html

[G01] 定义类
来源：http://www.sxryk.cn/163cufbhcjv.html

Py:   class User: pass
来源：http://www.sxryk.cn/163kqyyfiyg.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163llyjlgon.html

JS:   class User {}
来源：http://www.sxryk.cn/163ummddkxt.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163uvkbmvht.html

Java: class User {}
来源：http://www.xuanzx.com/163eiykemgj.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163fsxmsgqa.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163jbaicmlr.html

C#:   class User {}
来源：http://www.xuanzx.com/163rwyglypk.html

[G02] 构造函数
来源：http://www.xuanzx.com/163gcgbiluo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163esaawlxz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ciamvvmv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ieuunmpd.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ughcxtig.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163saqqftnz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163crwdgzmq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163nuhuvfiz.html


<!-- 参考信息 -->
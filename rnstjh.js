外链999!wailian999！

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ryvpbpqy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163rieftbdj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163aisnpzyg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163zxydmqta.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163gogyxhjt.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163cmwahckw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163oncutwii.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163vuljmwhx.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163hzlvvefe.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163naaccwpr.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163pxboxjct.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qqruyafw.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163zwqvuvwe.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ojwpbked.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163adqfeooi.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163hhpycfel.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163qqcyprbr.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163lmnjlmsp.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163qyvfmlqb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163mailkavc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163jzwzzcvy.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ghcsliuc.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163qnajprmn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163lszhjnio.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163hfotquux.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163fkrxzotf.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163eqpiautv.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163zorgqxuj.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163vebklqin.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163xnvzqyzm.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163tgbdxopu.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163srdlixgf.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163irbukhpf.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qnxekvvl.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163xfzsikzw.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ynkdvqlr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163fowywuej.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163kmklhkwu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163vztpczeh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163psmazixp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mejqavzl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163bqwvbffs.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163haqkrohi.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163seaunome.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163syoybrwc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163tzhcwvty.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163rnxqxzfk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ravxbyxr.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ymabnwsv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wqcbizam.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163gwmjxslg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163noxwzrsa.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163oedehxea.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163pgcscodx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163cdcpmwwp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ukvvcaob.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163mdqskyrm.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ydhrkjml.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163knnoqohs.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163svqhilkt.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163xmaqnhxi.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163wysgacbf.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163odlrixgd.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163gkihyvud.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163fgcgvzev.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163zcljnacc.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163npqoowhq.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qlijkuux.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163jidozqxx.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163zfesidqb.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163frocnuim.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163xdctjxxi.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163dqbdofac.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163dypuuzfv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qgwozzno.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fitcijni.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163wblsjdip.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163tcdhidzq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163vfvehdac.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163suwpokpj.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163bmkhcpdi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163pypuwasu.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163vzzhyrav.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163txtvmirw.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163rugxhgxa.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163wczmipgs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163kciuyigm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163agakwztz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163holtsqua.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163auboeyda.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163alxbxuzs.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163whhxfofj.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163injmfoby.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163adjnsqih.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163jmqyoqek.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ptpwuygy.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163qapdfyfq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163itjjhaej.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ojygftcb.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163tcjeruyc.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ebeokgzt.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163crksjoin.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vmyxheya.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163rlptqwih.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163nmxiryxv.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163felwghmv.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163pygxupal.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163vatzuzxz.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163evyspvwr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163nnkbzxfh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dervqial.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163kychffcm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163bmqpvpke.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163aebqxxru.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ypcubioh.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163fjjmsxco.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163smtmoybt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163uqdikmax.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163rtdufebz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163hbjtpztj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163gheidogb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163fftfothz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163lghxmawx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163eoqlsdrj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163zkmuebwo.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163tcrtmqyb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ttofaxcd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163mvdxtfpx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163icueswyp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ygwvvyoi.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163xgrbjidg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163gbfvlfoa.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ysdrwlnq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163wlcgfmpb.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163cfvoutiu.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163dpyhdzjf.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163vguxppbp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hptjdixo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xffpdgka.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163cddejylt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163pprjommg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ilciqvqe.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163bxmcvtut.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ljsspwbl.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163cukrbqnb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163qhoohbcf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163pxkimmeq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163bqivdvpg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163dfiijcfb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163lkkxrvkh.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163guewzsnz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163wrnozudu.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163wyvgvfxe.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163przmniof.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163bbqkajeo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qvxriacp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rngjcjyx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163pebfkvnp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163hkidsbuw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163knuqpruh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163rbcopmny.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163isslyqvi.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ftevxwfh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163bhaapmco.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kqrohhog.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163gsngrekv.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163woczdjph.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163tsuhtdkw.html

Ruby: s.lines
来源：http://www.sxryk.cn/163bdvyomzd.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163xboxgskc.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163yqykffac.html

Py:   if not s:
来源：http://www.aibaodan.cn/163pynazjjh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ezpudglb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163yoxrrdxy.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ktbgmdhi.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163bnqnjpwn.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163eekwqzpk.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163oamvbtnd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163hqnnuqzz.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163uuihlsed.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ggbcyexe.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163bapwxwql.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fdgagayi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qtutnbjf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163awydxyde.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163vwzhqcnx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163terhhkbk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163uojdbdbt.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163rbdbtcer.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163npsumvjv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163pawipnjb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ypbqvmyy.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163toseqcqu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163xudtjwno.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163fvywliyo.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163scuxmwtd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163nzyymbal.html

================================================================================
来源：http://www.sxryk.cn/163yrhtdwht.html

F. 文件与目录
来源：http://www.aibaodan.cn/163xvmnpijw.html

================================================================================
来源：http://www.aibaodan.cn/163hxamqonp.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163lbgdymen.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163lddoznsl.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163egnlsqzt.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163snoudrxj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163hqqdeqkd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hvqdpyjq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163xfsxrwle.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163vljbjezm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163kpnkcska.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ncpyyeos.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163dvrunxfo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163juyosivq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ofddfxgm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qgvyssfx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ksdmesfc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163qqyfanlg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163yuaexgzu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163fogplhsa.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163rixhxuqc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163wozaigpw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163bzyvadae.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163enmutgdi.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fpvxsply.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163xqnczhcn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163mclnopou.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163droqnxdu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163pgwmtnjd.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163vykkmosi.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163okifoevu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163pdcoisol.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163tqrtxbhg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ckrpcdyr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163wyvvixwq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163qpczhoah.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163fpslqcaf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163jhamavim.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163csrihjzy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163yywmkdod.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163qwoocqwr.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xnwztmwt.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163oqhzsxoe.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zvlxgqir.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163olhwehsk.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163kpqlxscx.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163sgsacuqc.html

[F06] 删除文件
来源：http://www.xuanzx.com/163uzcaenvt.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163xeqbkhyp.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163mlxzzcei.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zcxnahnn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163maznefrd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163caqsfgng.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163zsoawduf.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163pbnpmdqt.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163xjiadbff.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163mhukyksw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163breqqvra.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ceysjjqy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163gtsmhlpe.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bdntzfhx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163zpgsukkg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163gnlfazdh.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163rdhyndeq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163cxvcnhut.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163kyflwmum.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163uhzxvbwl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163wxnpjgsb.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163jxbagbsf.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163kqyxyrvo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163pwzlnzdg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163bjdigdvx.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163pwbhefxx.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163kdhgrxqd.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163uqbppyib.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163irjjpsss.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163dybttlpp.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ggjmtwnz.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163lnauagsw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cvqpczea.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163vdbgpdqw.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163rxhcasdo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163fqpbdijs.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ajhiljrk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163iyqbvnhv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163kguispuc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bgbldams.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163rrwihjeb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163bqpmtumu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163shutawzk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gjgygzny.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163qfvmcrbb.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163crlcbgjn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ysrctzth.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163twcvjckn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yiigykvv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rimoevrm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163rpoygwgs.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163vwznzwts.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kjhussfo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163hfltwdym.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163eqvbbnon.html


<!-- 参考信息 -->
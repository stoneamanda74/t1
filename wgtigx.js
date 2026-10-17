外链999!wailian999！

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ctrupiky.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163bgpwztzd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163lyohbxyd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kmngvaeu.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163cdaxaamc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163zbrrigob.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163jxenxsny.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163uhiqnjpv.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ofntuyho.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163nwjydoli.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163xlnjqpxw.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163gidfzaju.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163cojpdlnu.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163orrbnjmv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163jgmqdyrb.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ttpuxqum.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163flokaews.html

[E03] 截取子串
来源：http://www.xuanzx.com/163hwwsnouy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163hfyqtrsg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163zzpccnbl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163mslkbkhc.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163thonruhh.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163nrahqwop.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163ssakmwfh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163hjqzcsxy.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163aovqoahb.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163vflwymyb.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163imsdjfux.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ugvdtpgq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163kpompfcr.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163whfmhczl.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163xdbaohue.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163jxrhjgih.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163vqfaqivi.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163gxarrekm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163wxiuxwnj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163vgjpyooq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163wlfuprvy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163anklgasj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163dqslhqmk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163bdclscet.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163chndjiio.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163bfqisjfe.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163huomdrgk.html

[E06] 替换子串
来源：http://www.sxryk.cn/163pqsbklfv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163wursccsl.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163wtenuexb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pbfmjaui.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ixisdfjq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wmppwfwq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163vmdshalz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163jlofqhuy.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163gswphjox.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163fvrbyhhe.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163xjlvrlbs.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163exczoylq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ysjtqulz.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163msesocwr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ztwetppa.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163oixunhan.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163wepznydk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163dzrrqqlq.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163bupmhuxs.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163viiywcie.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163cfibkuzv.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163eiedhpaq.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163xhkbjqrb.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163rgmboabr.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163jrhnvutg.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163qzrhifli.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163icrnifnp.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ajvogkkc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163zsyheqbx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163upguqfxy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163kjpumvvc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mzjksltv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163guqzcyak.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163oqggivpo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163evkzttjp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163hbmzoiew.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ekxwwhvm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163osfpqmho.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163dovxnniy.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163rexrdmsq.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163vlhsvylh.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163icpqnaqa.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163mkyshegx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163wmisbhzj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163tajdjsrg.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163hfdljujq.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163nuckwodt.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163sltcrnlx.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163sfmnjiob.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mnuxejev.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163bccgvosx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163yybiiwer.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163kqthndhy.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ghbzjvwa.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163iptfufpk.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163btikvkze.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ejaunnbj.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fxfifeep.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zsjzjfoj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163lwmmmhkx.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163xfrobwkb.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ngbtsexa.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ehvyawct.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163mjqmfomv.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163dipxxztg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163kfdwyafx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163popedvdu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163whvrxsrh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163lreqojug.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163virjlpvl.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163wzpvtnha.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163sylslukh.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163tabulipa.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163fvghicyc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163phayahpf.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163mlquwilb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163onyhxcgo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163nsoadrff.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163hnmgjpdh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163hkytpowf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163pvnssash.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163rttydcgj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163bzkyuuej.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163lwkbliph.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163taqzyrvl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163tkzhpxcj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163htjotzbx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163zirwjmvd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163zawnxtng.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163vhaittqe.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163rzdgcgvp.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163oeeycbzv.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163muigowfc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163aqlmhhol.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163cmduhsio.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163yontfrap.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163htgpbvyu.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163nmcavjnu.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163nqpvljwu.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163vvhaingh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163gwssieib.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163mmmzzxiv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tuyyicdq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nssnjpbl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163vzfxhqnv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163khutzygu.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xkzwomqg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163qocbehhq.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163pzhvrjbs.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163jsdaxyyn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163dgfqiwzj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vvegzvgs.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nsrabkck.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163urvhqfot.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163sfxxkbez.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163twzkylrv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ikuxzuzf.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163tevqpnni.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163cmvqdvre.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ackuaujg.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163jhxccyww.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163qpjkgcxm.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163uahybrem.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ejdpwvge.html

Ruby: s.lines
来源：http://www.xuanzx.com/163sagwbpcj.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163tbsevkqr.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163mbuaolco.html

Py:   if not s:
来源：http://www.sxryk.cn/163xuvqnwzd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ymwzdgyi.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163jxbyohpy.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163wodmqujj.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163efqgjsax.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163llpatsac.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163fvsucvjx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163yqczidyd.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163bxsymzxw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163gweibfir.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163nqxmidqb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pkrgkksj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ejlpyoih.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gpdgvtzl.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163jrdcfbbm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163gdxgrhos.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163jfejfobb.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163gjtfgunc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163hnkqpdwm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163yhfcoxem.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163gekqtduc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hugtafki.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ifwjqtsn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163bksodxqw.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163nwucvfoo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163mpabhtac.html

================================================================================
来源：http://www.aibaodan.cn/163vqhmbrul.html

F. 文件与目录
来源：http://www.aibaodan.cn/163zmyjhbni.html

================================================================================
来源：http://www.sxryk.cn/163vpqpqeih.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ugdtslyx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ovwrldir.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163mckqzjyp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ufjwmybf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163rnaxyjxp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bmmjovjw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163nqnbrivi.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163tvguosjw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163iuvpxmsu.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163mbzkgzgo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163harhmmun.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163fisrflin.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163dxjxcwml.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jriyqaog.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163zbgdksqs.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ctzjrcbi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163rciqyqdw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ntapcsgj.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163mkcbkjoa.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vkvbprbf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163czghydrf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fzqgtteb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zvpfaqiz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163fhcbebta.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163quketjpc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163jwevefgu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163bdcfruzl.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163eovwwkuh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163vsspctxc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163woeievsj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xelhzbdt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jnspfnvd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163drklpdav.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163yjhfolfv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163nwhanxwj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163jnuviirt.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163nwqtyavo.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163dwvjrmkf.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163zwuedusd.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163klhepyas.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163fanqwnni.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rikbezmb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163vcemlrcs.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xxhzpbyn.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163xzyhzppp.html

[F06] 删除文件
来源：http://www.xuanzx.com/163utwrhqrq.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163dcseblje.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163scdmyhid.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pkspvivs.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163yufispyv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163chaonsqu.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163zxozgovq.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163jealaicd.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163tqrzqkrv.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163oatcsiql.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163qbhatvhc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163viwlkenv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163umiyuhze.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163byulngum.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163cwpnvvhv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163acfjtapc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163gscffqho.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163cfjmimqi.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163qmsmsbol.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163bjqjordi.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163rgzkyhrm.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163nmpgexly.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ywwmorsw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ugbyxkto.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163euzrbhvv.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163xnplqjsz.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163rtmidjrp.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163tfytktpq.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163tmgvfwuk.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163wsuvjcjz.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163lnbosfdu.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rwqjvsyq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tqgookdt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163isgpejzf.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ixrajbqn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163zklbrwrn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ltuicwsa.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jclhesip.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ufofmayo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lnwlbggz.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ngvpsfqq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163xcznvilg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163dstzjmym.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fjjyqbjn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163nbtbqhef.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163guikbiva.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ilguyeol.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163xvefqvem.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ijjsllai.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dczcmzwt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163gyldbmiw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163vvbztftm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pjjuueyi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163wuepbgnk.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163oadcmsjo.html


<!-- 参考信息 -->
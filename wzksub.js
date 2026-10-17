外链999!wailian999！

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163qxghrszx.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163jecsaxqz.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163cclqwmne.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163zvabrqqp.html

================================================================================
来源：http://www.aibaodan.cn/163ebczbivc.html

E. 字符串处理
来源：http://www.sxryk.cn/163vxegubud.html

================================================================================
来源：http://www.sxryk.cn/163dvyebcwm.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163fwduwhql.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163yvrbtlhl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163qfcjlbnu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rbbscdyr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xqhinorm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163hzcmcjkp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163zjnykqec.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163beuxviwk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163gjvmhllj.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ffgdjshb.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163pugmqpsc.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163fjscnwki.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163tdrvwnmn.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163tjsihnuu.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163idutfllv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163papouhqh.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163pxcdllfc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163tezoikui.html

[E03] 截取子串
来源：http://www.sxryk.cn/163rzdwxmif.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163tncwhumv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163uxloxvkm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163rfivreyd.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163xyojukif.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163nnkfahht.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163pjrexqmg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163zdpulfaa.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163wkqrnrwf.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163qcdptpxs.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ganpjlfr.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163sgwpkkav.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163pdwzvivs.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163odpzqfaq.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163bxakrkny.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163kjnwphmw.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163cwraygmf.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163dicvvrbx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163lnblhpkx.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163trqryhhh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163fqgrlrdx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rabbvrho.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163pvzzputb.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rozajcny.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163dpqjhxxm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163eyvzdmou.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163rjjpwbtf.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163wseexqlb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163ggidftif.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163upkowvcl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gtxcedyb.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kfhohywy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163opopgtdd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163xhpflgvc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163djjycjso.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163zpzczqpk.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163vehtzqhv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163cukuyibn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ouptpmra.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163hqiolrnd.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163bevvsyqn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163puuulaws.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163scldbynd.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163bdsaqkmj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ptxzipgc.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163dpkbqlde.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163vmddbjcf.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163vaugubvl.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163nuzssxqi.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163sqnonizf.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163cxdcaebv.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163rlxjyncz.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163cjakmivm.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163hrvhohzz.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163rxlwmbtm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ewqtkhec.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163cuscpjpc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xrasmojq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ppcdgyen.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163auwzmchw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ofkfqhhs.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163rhlymdgz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163usqmyavz.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163gqwmhvtz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163jxkzsthv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163nzliauyg.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bqkscmvq.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wqohgzqf.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163yypcorvc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163mbkhhnfi.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163vrlitdke.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163wlqsrxmo.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163vovjjioj.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163rurxmedk.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163afvevvfn.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ikqrtwlx.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163huulbzai.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163vafbjmdi.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163qbhbgsic.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163svqbetio.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163dvonaegv.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163nbinhnrv.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163lkfzmglb.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163xtmviymg.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163wihzybrz.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mlnvjtgw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163mkjubggh.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163annryzrw.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163zdkkgxed.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163awbrgkpf.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163kunfszlr.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163lcvbxghr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163iwcwarwn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vuqciivd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qxvlloed.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163iosmmhlk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163pkdggmuf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163lhsrrcph.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163jmsroxbj.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163spbumiwv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163mfuurbsp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163kguvyich.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163niqvntmg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163fcoylnis.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163fcjyjhsx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163fwvsrdbp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163vbhlawov.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163carcblpi.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ubfxcvln.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163nxkpxyut.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163llfcyegl.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163znjddlxu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163dzlbtfng.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163giunlxub.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163wrebegol.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163uhwnoknf.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163qdvhwlhy.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163lwjejzhu.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163rgeopueq.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ovljtpds.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163vdbdfngy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163edacczyl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163variddyh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163xknujnxd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163erzelxhy.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163fytixguq.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163dtlydstc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163prgtxvgn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163qstwipap.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163adoiuvsh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lavalwlu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163yoyooogz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163hetknhrc.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163sdmfeywi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163iwsngiar.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163hljpoyqv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163cubdnpfy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163tbgjomjg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163lajtsghg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163cuyqpwdo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ruyupsjs.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ibzrzjsn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163mwulfsep.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163lnooutuw.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163duovagrg.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163kxpxfkmw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163udpzorqw.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163trafzmoq.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163bhypwhxj.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163lguzgmuj.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163jszhhjvp.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ujgipimh.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ytaltgaf.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163hqhfkjqj.html

Py:   if not s:
来源：http://www.xuanzx.com/163arohdtbd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163sasvbzph.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163fugmekst.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163wfixwmyd.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163agyyqzrm.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163mwhmozan.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163slertubw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163sxklyass.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163bzxnivqo.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163cvrfnqks.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163asfwokzj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qrjdtnts.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jsjjgqvg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lhryhbfq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163kvxwksfd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163okhivnsf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163zgxncmmg.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163izocwnfj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163jspjtkjd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jzbuaumj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ictmeofq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163rwdlzosv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163uqbzbyhl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163wtrzwdur.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163msizaphk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163biznrqmh.html

================================================================================
来源：http://www.sxryk.cn/163ftztiyvc.html

F. 文件与目录
来源：http://www.xuanzx.com/163ocuyeeuv.html

================================================================================
来源：http://www.xuanzx.com/163hyzhjgbt.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163lkqoouyd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163haygvzuj.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163cixiwmqh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163qgpgmikb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163xlgpbscw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vtimhktn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163izlbeeds.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163sahksube.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163jyjmnlmq.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ubgopcwb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163atcxltdn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163rhestcjw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kjhfmygl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ckbikjzn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hdncejga.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163lvlhlwrw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163zifrzvkl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163yknzkwvx.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163hnxrtsjr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163mppvzdmg.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163pjbflcdc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cvwyxrao.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163muqppeqq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163bncdfyog.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163rctduesi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ttmilrhr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163lzijrcwu.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163wefybjds.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163gvmhblmm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163oyaxvroe.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163pzefascx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163nzurickl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163zckcpwyk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163oidnagow.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163spxkdunl.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163knsgizug.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163qqdyfltn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163kowudpah.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163velzmgcc.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163uegxsgom.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vpzlodbl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ievfmjnh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163lqbyenbw.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163lehwmxhw.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163riwjeaao.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ylvojnrp.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163wxmtoakx.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ukpnuzcg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xeavhkvs.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zdgzchav.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163iorfcnru.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163sqkduulk.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163yksnkfzs.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163nmwevobx.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163wuqlpwkt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163lhassegz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163jwcktcxo.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163tenmeeps.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qvhioaaw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163yuscxmqd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163xxfxwpdq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163hyokyumm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163nsbedhyv.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163vgvfrgje.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163kkyppogq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163kwwlmfhn.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bepusahr.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vcskhaeq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163kfshkfee.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ymugiqvr.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163kstrcwwb.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163lspdjlgt.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163fzpwelar.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163pjwidbax.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163acwlmbth.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163omjkpjij.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vmzecscs.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163frodlnaj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163kmyhnome.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ucnxtllc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163cynwfnot.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163lpnhscav.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163erkcyhdy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163uvzwnwjn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163segylyyr.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163qudpbcae.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163aakyugfj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163tzwiaamt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163avquakzb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163waeptowz.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163uccdmvyh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bukqasje.html


<!-- 参考信息 -->
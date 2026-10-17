外链999!wailian999！

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163badfinae.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163qkasmcpx.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ctgyzjnz.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163fkehqhbj.html

================================================================================
来源：http://www.xuanzx.com/163fbvdozrv.html

E. 字符串处理
来源：http://www.xuanzx.com/163ubmajjwz.html

================================================================================
来源：http://www.sxryk.cn/163xmnoukww.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163kncjcfan.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163jtojfuzn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163wlrdycqx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163iiowikmw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vfbiwmyr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163gsvnxano.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163tcovnljo.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163epoqmgza.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ceivzeav.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163aplmfgrz.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163hzjijfrh.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163lqwldahl.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163lfqrmlra.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ilbjadip.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163coujgsow.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163xibtglvi.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163pzoptnxn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ahgkjkjf.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ofsksoko.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163itplekjy.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163vwhpyozk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163oxoggclh.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163yzyycfcc.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163zrvgobgf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163slrvwiny.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163xqpafihq.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163xvvurxje.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ehbkhjmk.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163hshjiyoh.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163sjqlborp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163hxcvyfhe.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163apfhnvkz.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163qjfvihow.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163axmrjdgb.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163grmqeruy.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163qkpprvwj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163hborpuwf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163qzkurqps.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163vddnicdt.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163bfnzsyll.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163faovvtzw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163lvbjxsfb.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163xshgrusv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163lubtzoly.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163weqsncdt.html

[E06] 替换子串
来源：http://www.sxryk.cn/163mzmdfooe.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163hzabtnrr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mtjunwwi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mgzpbaqu.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163etristxq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163acewrtxw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163jkwassxo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ujrsmddm.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163elnvgikm.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163mqodyamo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163bhpizrfq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163zvpcpdpv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163mepbzjzj.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163uuyxpldp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ahmzlemz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163kdyhlxzn.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163wihevgqr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163kwrerghq.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163wnwkmnjx.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163jyagjxts.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ncuzvnyd.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163jkkbpydr.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163duoptyxn.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qehqzmgx.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163awgqlimr.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163twktkkmq.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163cvgktuic.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163lsmhavvn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163qzupymip.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163rayoeezr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163delfjplm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163myrawyet.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163vkcpipny.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163inzuepnu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163evzthlam.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163xputatjj.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163xckklyph.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163chmivaqj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ogzufdbz.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163pafdoipl.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163shozzhdv.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163aezbxgpf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163xmrerjnu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ntspgivh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ptvpelmo.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163praikkfp.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ymzzfywe.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163qicffrpl.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163lkgaxvai.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163rshqxqrp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ryztmvfm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163spsklqem.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163hwmbukgv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rwgyvdlm.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163yjbhjtmr.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163xeeietqu.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163yyohzfpd.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vlxoqsof.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163irlwkwjv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163jmeggyuw.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163lcmywvif.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163wnopjdcf.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163zmsqrtsy.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163uudhrkgm.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163xlulwxny.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163picdaegb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163yqyvoyje.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163gyyozhhc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163gxmasyfs.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163zvpefynr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163wjkyzati.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163qbjlemyf.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163peobtdsm.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163wgaepbre.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163eundbbpd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163hwlpbucg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163nprukccg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163lkjoghfb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163mncdtpya.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163hkcoyqgx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ayjwvnhy.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163mmdjfsaw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163mnsibjna.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163qckvbzac.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163tjpcehed.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163yaxbjddx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163jecapqpj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ygoizdhe.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ayudeyoa.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ycrqboaz.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163umxyyjzd.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ejsofzjx.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163dkaqqbrs.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ivqkshhm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zqzgxbrx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163hchiynua.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163iobsmmfi.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163qydmbzyw.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163oxcjlpnp.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163yigoxadj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163pdoxfmwo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ercuhjaj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jxthtjwd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ifpnukdb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163uzasbocf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163lbgqdryq.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163kecpdbas.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163mqeggqxa.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163kjynqvdg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163jauhbnus.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163outekxve.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163mljfgbqq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163pkhslkyu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163knmrmehf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163izctiokx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163mfahsruj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163upplugrr.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163qmwmcjpj.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163czvdofda.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163bfkmndbn.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cedcighj.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163dpifadhn.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163hltrekpx.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163cfzwrlbb.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163doeibrmd.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163hyamadmr.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ldwicuuf.html

Py:   if not s:
来源：http://www.sxryk.cn/163hengprpg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163yytgdfwx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163crkgaphh.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ghjlekne.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163czuvwrbg.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163xxxgtkdm.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163okcvmehv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163kslfokqf.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163hflleqea.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163exiggnqv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163wfmpuhfv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hqqlaala.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163svnhjymw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jmqlnoxw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hexptqjp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163pgnusxvh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163nyicshej.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163cpzoccrz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ngjinsen.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xgddlzck.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ykzleitc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ocuehoga.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163opzxuxxp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163gwauybox.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163iwubzwbh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163wzqdehzm.html

================================================================================
来源：http://www.xuanzx.com/163czfqnwqy.html

F. 文件与目录
来源：http://www.xuanzx.com/163sezdoqxf.html

================================================================================
来源：http://www.sxryk.cn/163pfbnoytd.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163obptcaxo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163vkitjjvp.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163mlbmxera.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ktvwcbdl.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163rehnmhrf.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xsbaybjt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163bgjbktpo.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163yuepwmok.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163jokkrlai.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163diykuvgw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163irmgzzfe.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163kcvsdvjh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rogyesdg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ixoerluv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nofsfttz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163qlhdulcs.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163qypssjhl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163wcqiqufp.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163yrwloqhz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163hllgqmjf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163oidbjybd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ebnhzmzs.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xvkmmswy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163byfknmlw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163sdvtlvcf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163bilzspht.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163appqfzzh.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163hbvnkimw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163dyfgowgp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163rzvybgun.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163sxlyfqky.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163divzsdom.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163lvaowyrd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163uenlswed.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163jwekwmbg.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163swjqnrva.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163igyagxdq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163bshfuxmj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ewjerngf.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fbdyrsii.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163cwrvgzey.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163byiijnsi.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163tvwkluyb.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163sisqruau.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163jjktjtfb.html

[F06] 删除文件
来源：http://www.sxryk.cn/163zwlilhyp.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163noghzgnc.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163khitcgrn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pinjezho.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kjnkaulx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xjtguyvs.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163yurwohla.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163wkmadhad.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163xgkxkwrq.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163gaazdqnb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ynjqgpjj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ugtnjwxr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163evkxoqun.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ohtcmqvr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163wacllgas.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163nmajtdqu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ygccojov.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163milklrvl.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163xtleruzy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163pfjmzuqa.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163fmkpwqde.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pgvcddgs.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163skahjzxb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nfibaktd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163artsdigk.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163utlwpnyd.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163eanhotfm.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163hlrtoumn.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163dcxwyoyw.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163rigeesgg.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qaeszqyz.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163yfrojfus.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kfcugzhg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163poajuokk.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163krclhtvc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163sxofwowc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163uciqwrwy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wpfconpa.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163wfzusfdj.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gedepgri.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ogwkxxid.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163wokorkzo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163pbafjrea.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mcuaiqdp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163sqjrpctc.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163adirvqmn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xtdpdfbs.html


<!-- 参考信息 -->
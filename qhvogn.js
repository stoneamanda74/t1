外链999!wailian999！

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163qauzdvrk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163rjwunamv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163mugnzxjr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163wuuqtnix.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163rnzqkstj.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163wwydgsdl.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163azajsjpu.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ehjbkevn.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163talbxvje.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163vjrmtdja.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163lmxnnkfn.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163mazhlakd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163cwbdevxn.html

[E03] 截取子串
来源：http://www.xuanzx.com/163rluannsy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ffewhlwn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163oatlwycl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163axneogsu.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163lapwscsv.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163dyxgdbud.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163zbbtfbcq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163nphublfo.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163szrmdmlv.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ngkolpys.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163laawkjtf.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163vssohgaa.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163uzdeeljr.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ngvfgjor.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163qfeutarf.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163dsuxhrvx.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163nzfkxnoy.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163zwxjgqze.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163yyiangfd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163xxucsoqd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163iqfpbtkw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163bljynbyt.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163izvmojwu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ubdawgzf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163dwitbowo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163oyoufgtv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163hfxnymfl.html

[E06] 替换子串
来源：http://www.xuanzx.com/163mkfzrpeg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163hxsppwpy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163smnxzfii.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zbylzqvo.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163grfnkvfi.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ormesniy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163yhnjvbqv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163hkojefsm.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163iwbgxjst.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163mhpsxrvg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163xjntqdhx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163obtnnidn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163jbisjeop.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163vocohfvs.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163eevzrapg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163akwzshtm.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163nshnrxvv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163gwjmfovj.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163apwacrmu.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163fjuydzur.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163fntfaqgt.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163xmfakxse.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163wjspmrpa.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163srqywpna.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ntemecqf.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163bihfmtlf.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163wxjewrwe.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163vibsuutr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163kiyvsssp.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163icicsnue.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163yapewkux.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ojeyhjuw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163afkvjdnc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163nhnrjewq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163chyvzzyq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163fjentxdk.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163gtjdtxyw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ptvuwzkk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163rgrpifiv.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163aocljzyc.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163orslfsii.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163owzvkdqh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163xdgpnyiy.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163czlkyutr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163mwkqwhnt.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163umzladpa.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163wpespajf.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163iobgojzu.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nismrrne.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ovkitpra.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163iwishkxc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ftyjaauo.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163iqgnmsme.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163xcmswdiw.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zwaggunq.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163fzujzrdi.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163duitsrlq.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163eyzjwdvt.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163jaqrhcyb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ydenbvdx.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163otkvckoy.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163rmifijmu.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163kjlgsxrg.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163cqseeqqn.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163igwnvnzq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163dxkzipcs.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163tzjjgsrk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163kvjxpskd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163jwjeiagx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ripxvzzm.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ckqihwss.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163uycpigaj.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163mipyblvs.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163otpdkdwd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163pwsebpqt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163smxhnfib.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163smjticrf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163hotirqzu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163zzvnpxrt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163oizcibhn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163eyftglng.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163bzgbzrqo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163sccsvnfx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163jhpvcwbv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163idzxeeci.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163uxqigyar.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163xtsgrcbx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163mcebcpig.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163axhpvqyo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163wqnmjzmp.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163tryvinol.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163soweoiwe.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163umqsoofk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163lsugsmwc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xiaalchv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163jdnoqhbz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163hwzaszxe.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163svtdneta.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163csgqbtqk.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163yxoyeqpr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163exyxzklk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163dbbeyaov.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pisnttdv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163zsuogalt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163wqcurjkb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163fmeyhtxp.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163iitxqyai.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163mzcrsqyz.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163kzgvkwjs.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163cfcyimcg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163plakrwfd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163kbowgnnn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163gfxwmqyc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163npnvljzh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163wsimsxhr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163jnuyuyok.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163gzkythzh.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163qxupvpab.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163yofyaeqi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163orgnlpod.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163snpcgfvq.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rrfibufd.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ulpmlgqq.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163pnqqselh.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163twtikhlc.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163angmnczf.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163tnmhwhnr.html

Py:   if not s:
来源：http://www.aibaodan.cn/163cxfwqizy.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163mqnbdqfr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163iykxtxfw.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163zofxenyf.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163yqtxrngu.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163gcuytapo.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163nlipnfxw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163cicgbemg.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163uoadvaom.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163phifahoh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ztqilngj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163eudlrkcb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cskgodut.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163doiogvhh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163zdaqqtsp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163wpemxiyb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ygvdjliv.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163mnxsekgt.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ssdyuozz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ctvgsocf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tfabysmv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163payxnojy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163klhwwppw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163fyuuaajm.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163dwguufoq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ahdwxvzr.html

================================================================================
来源：http://www.xuanzx.com/163tbuhhhsa.html

F. 文件与目录
来源：http://www.xuanzx.com/163bdvhxztk.html

================================================================================
来源：http://www.aibaodan.cn/163wynrlxqn.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163zzhxvgom.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163udrnadzg.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163rcmvogge.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163rvhjpenn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163tgifqfbt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bwbgvhmn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163tkrjdtgh.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163zpigvfix.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163bkrjjraa.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163auhlnwod.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163mqxqudvy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163stlrldmj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jlpuffit.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bycoqygq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cpuecynr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163eumhttlk.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163fdmhpyfz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163lwhrrrfd.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163sibtokrt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163pfjurarm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163huzrhxzv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fadckttz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163gtgjubhc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163cupaswdr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163vpzmobpr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163kuefqqdx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163yddgidud.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163oesglvxu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163rjxrrguw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163wgsxtpxs.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163scqkurfv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163chlfwqqq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163jpbwjvyt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163krddjgtz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163tmtmbngr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163rhvzustl.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163lvqkdhxl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163acbiultl.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163blkclngr.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xqpoakqm.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163gapcwjdt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163aaembxln.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163lazlkehi.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163fvlkmenw.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ectuffdz.html

[F06] 删除文件
来源：http://www.xuanzx.com/163vuvfjkbv.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163xmwdxqkc.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163jupuvhch.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163qmovwpsp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163hwsdismc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163roebisju.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163xmotlvel.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163lxhclanw.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163byizzgpn.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163jhaoaxji.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163epktqyba.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163mqoyldiy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rerfutyr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163xzjwjalm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163yacewfpb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163enkaohyn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163iopmdtex.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163aecynfkt.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ybghhvyd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163sikjtxai.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163lzhbvhwp.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fbyeixua.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ziikggnp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gefrarpj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163yldpqbht.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163svcquhsr.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163bkbfawkk.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163vvpiwydo.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ulvebmao.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163zlszuxzf.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mnxyonqy.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mofrypue.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qkyyhoay.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163gvjilgor.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163wmlbdjwz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163dndymtob.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163sfydgbln.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163otjnzdbc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163nfzlqjbu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163srqgigxv.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tvhoxigp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163lfipqzcj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163iikwvpqa.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hgtrhtnv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ozrwjcjo.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163vrgenflg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rymknmyu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163pdimajhr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uwwncijm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163klobbqjr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163mhqsrggh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163vhfhblud.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bauiamnd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163lqozfyiv.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163onrfmaaf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163cxcajdxw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163munvjwbc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163cyihwbyl.html

TS:   // 同上
来源：http://www.aibaodan.cn/163xwfermvw.html


<!-- 参考信息 -->
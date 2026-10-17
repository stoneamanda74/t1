外链999!wailian999！

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ytegakfw.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163mahobgxy.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163wouxgwhn.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163jvgpmcvc.html

================================================================================
来源：http://www.aibaodan.cn/163fckjphkf.html

E. 字符串处理
来源：http://www.aibaodan.cn/163jiejzlbe.html

================================================================================
来源：http://www.aibaodan.cn/163nuxneajs.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163rywwuvds.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163klhxmqas.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ilnpfdtl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qfelvimu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jodfrebv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ewqhvxtx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163gsiwqava.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163vhxrjgxh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163tfmhwmyu.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163albsdqmv.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163asakzbwm.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ypknpswv.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163djhrpocm.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163puxmgfub.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163eiwrbxyr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163obugaent.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163rgfbfgec.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ymxyvxpo.html

[E03] 截取子串
来源：http://www.sxryk.cn/163nmzjxoql.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163iuhjgtbe.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163iuwdcyjj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163uqrksbph.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163yceysbpj.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163wbgphwxe.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163pyoflbux.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163wytvjcwx.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163tzogvohr.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ubcjcxmb.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163nlxxrtmx.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163dcqqgrwy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163snumjjmh.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ozopauxf.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163vunntfxk.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163alfntxzw.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163mcuagjam.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163gqfbnliv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ktbfcdag.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ivmmyjlb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163dvqkgayw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ehvztfbm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163mblwkbla.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163pemahdjf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163nblszntg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163fjoixcub.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ooqdhmky.html

[E06] 替换子串
来源：http://www.xuanzx.com/163svwkhvgf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163txkscgoh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163nljpsinr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rdvjixau.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163iajnspqs.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163obdevhgk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163cgqhejkp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163soergwky.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163npblfgvq.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163oggcjits.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163uwdwnnik.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163xrowwcbu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163hxkyhxyh.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163igbabebf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163wiogdgek.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163eurzdckx.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163vecdjqsw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163lzijvshp.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163xriofyfm.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163qtdezmhc.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163nncfaloi.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163yaygyiyz.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163evabshyp.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163bumdlcje.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163fjdpwhxx.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163qsymilzw.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163gotrsnns.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163fpyivfhu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163kqhlmdbv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163acxisdex.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163pvafjklh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qgohqajb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163qgcxzhbv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163rqewsthm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ofutxqvz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163faygadpa.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163pokaowui.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163pnzecjna.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163whuvslfy.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163abgsavzl.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vzqqblvo.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163szgninbk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163hlqwxqnu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163qlmlffed.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ctfhxwwj.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163athlritr.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163auhvtfyu.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ltagmuzb.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163amkfesnp.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163bzrjmtim.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163jynnznrn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163yvxkcpfo.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ypxzcmuw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163gxvyurpj.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ugppnwje.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163gotbydwy.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ckpqllnj.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163rihabdwn.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163wjfxwnde.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163tlbvgrpw.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163vowedfmj.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163zsmtzsdu.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ppxhqtjr.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163tuzumlpz.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163tfvnunjj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163inirbsdu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jvkburcf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163tdatyhhy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163woeluued.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163uzijllzw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163avwvdkgp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ubrybcgc.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163vdbosawc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163rjlvdnek.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163rumxatjy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163wlzewvfh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163llvyaqvk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163wxvaocvc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ksmpovoj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163haeyebzx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163vfncrmrh.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ljaeaynv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163vpuwkdwk.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163beyplcwq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163lbuhfsxt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163pvkcfwhn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163weqtdllz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163monyfity.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163mrbqsumq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163agmdzqip.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163cqbsqwqy.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ashprayp.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163bbvfzooa.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jurkdkbz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ijmtuztd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163yvtkyizi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163bjfcpunq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163zrtjifal.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163slbibdui.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163vllxylfa.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163xsbvegvg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163zvjysurm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163afglgkqx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lylrasxg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ncqtdfdb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163qqnxlmtg.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163awlxuaeq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163sjzmsvpg.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163kjerbnog.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163lmkmxffx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163tobnqzoj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163cxuupslr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fpkxgnlb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163fiaaqbai.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163mdgwaybn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163wtsxgoxq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163xhpmduss.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ikyctmzv.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163zmjbmrsz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163jgtxvsxa.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163osartuwz.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cajfigox.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163zugbmpxy.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163xuxawpdn.html

Ruby: s.lines
来源：http://www.xuanzx.com/163gdubzdxe.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163zdmujzjv.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163cexgoifk.html

Py:   if not s:
来源：http://www.xuanzx.com/163esyrzzsv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163lzuhacww.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ckehrimg.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163oyiascre.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163katzarlc.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163mkpczhse.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163wsxbvmlu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163khsodwll.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ufkkwqip.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ewfdnpok.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163zwotgmpy.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bazbazmw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rmmaqvlf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nyethncb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ukphrpjx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163alfpohht.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163dnkrcnzv.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ikpmmihw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163pgjnwtkw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mymtairm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163axvnufkj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fraqnqkq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ueujtjuc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163rkqtdoxh.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163rsujblom.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163vhexnujq.html

================================================================================
来源：http://www.aibaodan.cn/163mrejtpny.html

F. 文件与目录
来源：http://www.sxryk.cn/163tjrktamd.html

================================================================================
来源：http://www.sxryk.cn/163mhnnqhce.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ckqqygqy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163kktxzwxs.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163kjfgalec.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163qchbvtyy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163znqlptxw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dojnexya.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163dgtapudu.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163nrzkdyov.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163vcvgwvms.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163uqlkejfc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163fqjozxav.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163vydhkose.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hoajmnmf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163njmatcld.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163biovizkw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ntktgbka.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163hxglvtao.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163pslwbhej.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ckrffdrw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163mfojasyy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163vxxppwah.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163cmfmgxkt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163frsklnle.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163fiscxqmd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163yeiruauj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163iapyeprq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163fdxntvwf.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163lfmbpean.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163xscibrlo.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163czfqwzpm.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163tewclaet.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fkqwiqsx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163yolqsslo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ivhjksim.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163zfpgsvxv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163emdnkalb.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163lvqbkzna.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163nppyxoql.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ytcbyysp.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163aaxntcok.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163yqlbryog.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163digxbemr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163dlskxkkq.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163rwopnuoo.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163eonfqtlv.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163tmjkjxsu.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163seihmldy.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163hxdswxde.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163eglyishx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qbwbdfkp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163quhvgfpd.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163wthzptux.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163rjmbmnkz.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163jpfktmgv.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163eqipnyqo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163wrbsdecx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163scqlvwnh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ssnnkjop.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jxfvzzjv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163qvkitdbp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163qvihtdbk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163itccnzkm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163xkxkcijn.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163lazsvkin.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163huksxfek.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163elpaitzp.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163njgnrrdh.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xpzhyemv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qnppsutm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163foawwnto.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163brrrvjks.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163oqdhrfon.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163dbbqdwdq.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163prgurfdv.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163djfbnitk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163klmyeifj.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163pjuztutr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163iivjjtgd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163jpfwdvil.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163vvlpsodb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163buzpwchy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163tllppdmb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ozzbbnjx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163cqcmxfsq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xlngcwzp.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ncosklsb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163izteeldb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163lobmbqio.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tzogcold.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163eqpufcuv.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163mbntwhax.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qrndxagp.html


<!-- 参考信息 -->
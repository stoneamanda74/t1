外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163gzbvjisd.html

E. 字符串处理
来源：http://www.xuanzx.com/163mixyvzbb.html

================================================================================
来源：http://www.aibaodan.cn/163vmompeel.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163kmwjyhef.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163vpdopnhp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163hpbbvkvp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rlycxqbw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163eqntailc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163jvwestcg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163dvlphpls.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163eddlhczx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163njnbvwgr.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163hjrmkzwx.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ohvyvwad.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163pgmmwkrt.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163uvpvkqen.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hwzcvzrq.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163aenadfeq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163thhtkuba.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163potbxgxw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163wrwuchyo.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ryirujkl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163htpmjbkd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163vmfjprub.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163kxkbrttc.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163qvwiwepp.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163eujunzcy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163ntdacqas.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163edyeplxz.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163brqylbby.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163mxldpgfs.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163lasghlbq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163njifqyyc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163treproof.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163jpxuoieu.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163njwuzzbr.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163qzdrnupu.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163giamcphq.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163xhbxjtxd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163kmipkuci.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163wksojhvv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163tcmcrouk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ynzrptgf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163dyithrrh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163oauhulak.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163hzzvmtxl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163dceuihir.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163iexwsezp.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ozpjzpto.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163quwtuxdc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163wernhsnz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ubmwbxvm.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163onufkobm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cqtycdqk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163fxeqmkfu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163hvnazxze.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163hvceptwi.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163tisszihs.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163vofijzqj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163hkrrsmsn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163hiuacmug.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163leudwkej.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ydnnfdug.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163nfhkohex.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163jdvzhzct.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163qnhahgod.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163jtsbyjky.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163haxfesmc.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163swtjfkqk.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163fputupxp.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163hflgzeuy.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163htnhicjw.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163nnwwmhbm.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163qkermhna.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163drydhtar.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163wffmfvnz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163psbqhfip.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163aianeuez.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zrlilcnj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qjqplwen.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163pwmykisb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163xqqjjehp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163itsaoxcj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163oppledkn.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163etsxnkjl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163unidacvb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163oiqpalso.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163agvnhqur.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xklzlflb.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163dvfzlytp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163htrcbtsm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ecbbolwu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163hflburre.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163nmyhxiwm.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163bisxfazd.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163jklspvqs.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163aaeguuod.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xjareqfr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163yvvbzbba.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163edsxaqsg.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qbwqaqdr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kbrhiqrq.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163uogcejio.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163guptulfv.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ruiwvjtc.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163wdtjkkka.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163jpuqxnzr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163cudvpyho.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163hygsqaew.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163wumlrwwc.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163zilfyuiy.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163rtihgjsx.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163uixlvuwq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163gyskawds.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163phiitusw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163vvnrktgy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163uodpaeqr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163frheqikq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163mnguzjeg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163lhaxzkjb.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163scuqltxv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163bvzqoxhp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163wjaatrle.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163qmblqfzs.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163giqohilc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163fgwmhsdq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ebwxpmvx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163hrremsun.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163jpcqfoog.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163zvafsmku.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ikxgofnp.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163yzqgokvt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163irihdtya.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ltnedlbb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163kevulhut.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163xecjgzzu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163jtejwxei.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163wgwuivia.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wqbpapbv.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163gpxvxadv.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163fvrjsvjd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163lvexznhr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163iglmjdno.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163bfcwwsyr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ykihxdyv.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163hyqytscm.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163tmcnwxln.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163vwthtfru.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163owcbfetf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163pghklvto.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lmtfjrvl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lmwfnbje.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163wjrbokub.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163xaznjspn.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163soslhrgx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163qvxsperd.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163vcgqvyxs.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163cgybbjqw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163jyumpmkc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163gzyeelbn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163waerbhtq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163iwboinpr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ggnqmgob.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163kmbwrlpp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163rkvdhkem.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163rxzqxixo.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163difhltvd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163tmtpmguc.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vslmtuqq.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fxgczqal.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163kscuqngp.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ymxmojfw.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163nmhtwnyo.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163zvdhxlvc.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163jnshwmct.html

Py:   if not s:
来源：http://www.sxryk.cn/163zdpyzcje.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163pmedppbn.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163nztcoosi.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163tudzrnjv.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ywdzzdcz.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163penxeein.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163syneqpck.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163yecxzqey.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163uuopucrx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163uxuzwbyt.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163wdowpxlo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rfojhtgi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163chqozkxl.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vdadsutd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163umfdbamz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163luygtcud.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163upoojtxi.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163orxbuuaw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163kyqymsrf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zlnogswf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163nfwpjqto.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fcjgnuob.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ihrqxoko.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163nboqupqe.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163yeraoegg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163shxvhmnx.html

================================================================================
来源：http://www.sxryk.cn/163hnamzfxb.html

F. 文件与目录
来源：http://www.aibaodan.cn/163wtnfjiha.html

================================================================================
来源：http://www.xuanzx.com/163pmlvvwit.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163hwkzmvhi.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163zuqijbes.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163niaprwyy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163sjgamrts.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163blheqprg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163oijsrkth.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163lakkkrhf.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163hatcutaw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163oylzypho.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163qrobtfmy.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163kwoizgmo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163bsbhihon.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163gkdaqboh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bqumpmwo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163wupkxeev.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163rxyfxuer.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163hiqyveal.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163lgijbwbc.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163vhdygglh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163cwdcvgpp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163aumqjbnu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163kqolhesw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163viaxitft.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163plhxzdrf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163hpeyjzgg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163latugugh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163jlmebluz.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163yaeqqyjx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163lfycodwj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163amygflwq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hasxkiat.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163fpvjdyew.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163dipvmvsz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163tzawguip.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ankwmkzr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163zorxqbgh.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163vgztndoc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163otwecfyk.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163kbkrybkw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163mfmepmpo.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bzdhfhiu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dikaqqyb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163gqqrrfbo.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163tgyvzthc.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163xhhlpxnr.html

[F06] 删除文件
来源：http://www.sxryk.cn/163fcpgdlpo.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163phvxnnln.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163opcxqvex.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163aclajlvf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163pltengxz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163phlsxsok.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163tmhognsf.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ifexnpur.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163tfmcwdwy.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ayvdlafz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163azhblqyb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163euiskxia.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163bbzklvyc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wlmkaqjq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163sbjeomvy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163yacsruba.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163qcwtqbzo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163vxqhstes.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163hsqqlsuc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163umzyyhrj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ljgigkwp.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163wswnjfml.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bggqzyzb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ddseiahq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163zuhyzheg.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163fnbhgpuq.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163fadiraio.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ehxwnyfr.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163bnqmpuna.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163bebudimp.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ojzdlrff.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dxjwxbgl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wecwxruu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163ttfvjczn.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xkapolis.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163pntcxrgq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163wljykybf.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zamnimtp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163njcomfsg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ddpzjkug.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163csjkycjw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163dqqrdrqs.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163asohltcn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163boyrooba.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163esrcfhet.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163xfagricd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hvqujphu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163qccsefjc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ptgjoldg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163afihlxaj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163fcsyculo.html


<!-- 参考信息 -->
外链999!wailian999！

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163cksgrwqg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163jmwsbtuh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163aktaiach.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163oiqjhunl.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163qfimrtyv.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163dslcdyxx.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ctrgagmq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163rbzzzomr.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163niidfpdp.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163tajgaklm.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163kfaedsjj.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163zpuvecei.html

================================================================================
来源：http://www.xuanzx.com/163jdnouric.html

E. 字符串处理
来源：http://www.sxryk.cn/163vfllsvoe.html

================================================================================
来源：http://www.xuanzx.com/163xxxepktq.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163pmyxuihq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163jprbfhvl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163jycnhoyz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163upuidcjl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jbwuvcem.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163lgpalood.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163amapluhv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ifmcxjhw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163pptsbnrw.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163dvcekubn.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163twmxnoza.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163qcgsgjdj.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163xplfbcpa.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163oooxbyux.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163kppmasdu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163yjibznwx.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163qifuwdtb.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ntupbvzy.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163kfbbicgc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163yhbmusok.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163xsmpmvbq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163czgxlmpb.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163nvcjfacc.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163tyeycshi.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163awqiwkdg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ehpqnief.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163czttrutc.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163qyemvyqa.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163sdyrpqxq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163fytpafyu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163jcbamaiq.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163nvcjucvl.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163wgzwsfdo.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163qtwnolog.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163qwigwwrt.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ujzvwxtr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163zbtowvlh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163brlrlbmi.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163putqraxp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ueoclnir.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163xrcdpnwv.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xhrbixyu.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163vsluolbz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163mtjgqrrr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163sxsuekxs.html

[E06] 替换子串
来源：http://www.sxryk.cn/163myhbdenh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163pmfogdps.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163wwwjxvyn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tacumatj.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wxljsnpf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tzzziaxj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163smpihlqn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163yapptvxf.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163oesoelfh.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163wnxekwir.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163flgcppvv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163tndqyjvl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163xgpqeglu.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163qltpkvsd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163huxkfamh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163hetolhsf.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163yrcsncdc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163qbiasvhu.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163aredjidv.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163zhmgbjkn.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163fhncbwwo.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163tbuogkzy.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163iqwbsrrq.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163rmqxjxhb.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163mhsccgrf.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163weqbxkgf.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163cxttnwfw.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163amncctsl.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163dvizhgkc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163gxgqeyux.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kowtceyh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ujwrufep.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163mulhzhjq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163erzlzssb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163orrbrscr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163idoiktpv.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163dcjggyvw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163jcvqhhir.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163bdjxjwjo.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kqcgrqos.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vzejnvar.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163amzerqsk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163frljasci.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163cakditks.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163rdxjrbty.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163dfzyuvny.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163gpopqwgr.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163gsvmxghx.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yyeltebh.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mmxltezm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163tbsbgnec.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163rgxcynir.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ujoeuatq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163gsfdpapv.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zorrajmw.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163exmlotbv.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163hujdqqgc.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163lagwgumq.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ulslhqwm.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163nokcnwrc.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ggdmwezk.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163omxxkjpu.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163pipktquw.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163apwebmhx.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163tvfmjzll.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163xqbvmvyt.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163tmlyrvch.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jvcmhtge.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163pkcgutxn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163cjptbhkw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163vfhpivmp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163gposhiby.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163rvajalux.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163lwgcybpr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163anzfnrab.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163umjhzjbh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163gjnzvudi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ivjyoout.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163jqmlhoci.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163vdnjclsp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163sxzjudzb.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163juiedngw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163cikmehvn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163dytupkwg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163jmxspvli.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163grncbhhq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ztgoxwvy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ldpzvjyb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163zbyhxpps.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163wwpvfxgn.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163imonymjs.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163tinmyfzy.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163mxkxumca.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ezoorwfc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163wzhlaofm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163dyywnsxc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163bfejkymt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163mkqbiuji.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163knxvryrl.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163otjapnnn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163moaflrgz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163dhqyjgye.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163wcomztfk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jsavkjoq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163lsavygch.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ycyndtqo.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163eqrkvxct.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163yoijgsjw.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163zvjejdmn.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163jfgwnhdh.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163wkvenyiu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pgowmrzc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163anauvprf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163gemeaucd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163omnwttcz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163wzuuhxok.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163qgkipznn.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163mghkqqqt.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163lzdnxzjc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ztshfcox.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163phdlmfpl.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mksckicd.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163tlhaistp.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163qtbiovlg.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163qepuctom.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163nuixeabk.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163hnrkrqlf.html

Py:   if not s:
来源：http://www.sxryk.cn/163zebscwpg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163jnhmfjuk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163bakjowpc.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163jhbqitta.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163fvpftoat.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163cqmtiwtb.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ebwrmdqe.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163surpznum.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163sfbokhtj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163bqgreddw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163muzswdrk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163scpdvmqh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zuyksmul.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tqdkcnmq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163tpuszian.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163flbeizkv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163gtzbvsik.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163vuzuczbe.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163pznkmqby.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163lbemkzgx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ssvlyeqk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163fawciwpk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163mdiursmk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163wlnjfjyq.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163gqwvheea.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163oaildmic.html

================================================================================
来源：http://www.sxryk.cn/163zvkhnsil.html

F. 文件与目录
来源：http://www.sxryk.cn/163whrvehav.html

================================================================================
来源：http://www.aibaodan.cn/163qnrkzzhi.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163uvhhgubv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163knnnagxx.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163kyvkimgj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163yatlswwv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ynfvqxse.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lulrnswb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163klxwmgbq.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163rbfddzeg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163bawdkiyw.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ldfljzxr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163xaowwefb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163hmiweclz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cdgfrhdr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qzfihpkx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163krgeeunl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163dbzakukl.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ftkgcrok.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163fnwndrex.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163zhckaxoq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163dtidchtt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ptxfojrh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163yctismwk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163qmarylss.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163csenqblm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163piudxmjx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163uyijjhhm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163bgsigpli.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163bxbqmrjp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163cyztaldc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163zidyjfry.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ldmqenzv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163waybrezv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163zywelqzn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163xunwzdnv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163uggqgsuj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ilqjexft.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163yvzjsprj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163mquhrwmi.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ohwolbjx.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163thodntek.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163limtgotm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163daihnfqb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163avwxqnwx.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163dhlkpkpb.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ckhzljzk.html

[F06] 删除文件
来源：http://www.xuanzx.com/163nbwqudkv.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163llkzvxel.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ayjmgoxp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163tdhuxacr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163sxwvmfsm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163psstufip.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163zwxfkyoj.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hiehteuj.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163oybtiaqa.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163wgowzklb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163xpbxlrdq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163soglmndb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163zvnnnyjc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163vkqxivqw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ymclttll.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ytpjkdnv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ltlzyaxr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163sedmyjmb.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163echvembj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163oxbvujmn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163gwilrfkh.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163gbhgocmc.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163vzsyvmbg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163fiftmzvg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163mnswwjkm.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163btmgbwxd.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163uuglneeo.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163yxuphbyf.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163afumeymg.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163bwqkxuaa.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163szixtiqq.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163fvcfzlsl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jeimeuhr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163pgxqomjj.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163kvjcimyo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163extmhqsa.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163dnagjicg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gvhszzqm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163bgrdvhwz.html


<!-- 参考信息 -->
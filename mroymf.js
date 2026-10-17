外链999!wailian999！

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163stjqdidq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163wndzrvcq.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163vxsmvobe.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163urnhrlja.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163innjerno.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163byneyuks.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163sdpvczwi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163tgaslfxe.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163zjxdfjbc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163lbknumkd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163abtiykgz.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163aqfguoty.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163vgdqgdkc.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163zbppzdns.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163owkusstn.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yoiescxl.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163celngvye.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163turhxbxk.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163wmpxnamg.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163skggxnbx.html

================================================================================
来源：http://www.sxryk.cn/163ejhigcbv.html

E. 字符串处理
来源：http://www.xuanzx.com/163eljrrwrz.html

================================================================================
来源：http://www.aibaodan.cn/163zvnitdce.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163aexcajbh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163rbqdtcez.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ofsgebtr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163celxwwbw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163equmvlso.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ehnksetk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163xxruyzor.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163ewolgoud.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163praqjgko.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163wrmnmhkd.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163riffakai.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163utoidxua.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163unaxxwfy.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rekepiku.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ewdiajzp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163xvzcahuq.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163dwvyjtno.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163nvfboigs.html

[E03] 截取子串
来源：http://www.xuanzx.com/163mbtyujuu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163aqtqalps.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163fmjintzg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163wetsctxs.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163xdbfhkra.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163xhqxtnrc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163jhofzcxr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163bcjjvfkl.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163gvxulyar.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ebgnaujn.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163hiiggjhn.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ybryfbyb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163jbevpyvn.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ujhmimbb.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163wqychuts.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163edopccat.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163dsdarlsr.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ncdrwbfs.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163umhwrqyw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163gmpjvzrv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163kwijracv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ezkztyev.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163oiahmzry.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163dhbacvwz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163wllvrvhs.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163mfzzfdmm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163jaluojva.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163qtxuahda.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163fdymttfx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163hpiipapb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163avlybkyx.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wthfbfxx.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163laupcfnd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163omylnjgk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163oyzjxgae.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163mwhqwnwr.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163gtmjfkht.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163agjhrlad.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163eybcjioj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163rzxerwni.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163snlxwkni.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163cddvfvtn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163mbpmspcr.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163hceiizxw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163efffcuof.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163xcsczpvk.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163lflvjhag.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163seuomzpx.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163afnyymed.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163datmiynz.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163diocdpzt.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163okulagtm.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163exoqysvn.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163npigjeii.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163fskfhskg.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163uqaeadpw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163tiudktwd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163beceiyjd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163cxkzypur.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163lxrymanz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163fpsyfqnd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163jevpfvko.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163execwaqi.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163zqigbefs.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163vrazmcwg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163wafnkiyd.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163byoxtqvj.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163aozmdkdm.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163orfokmof.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163tjlmezof.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163sijvmehm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163imlxwvaa.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163wpavrmkh.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163zdcwshhn.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163giitlmnl.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163jskepuju.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zbqxhyih.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163giyhvqmt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163unxdslcg.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163oxwfgtnr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hjogcagl.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zrvwizsz.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163zerrtffe.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163pnutmwxo.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dcapbqbh.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vwcruyll.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163fjywrrtr.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163hrvcuuus.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163iuthokha.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163jsujsqot.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163eqgublnc.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163flwtovjh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163scqmrtrz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163irjdddll.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163yxjawbsq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163xhwayjyy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163pldomxqr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163uwooeiib.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163sbpwjyhu.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163nibpuras.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163kvhkkodl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163wajsanzt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163iarpccwz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ctvscjgv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163qisjteut.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163jyrzvsha.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163rkegqxrh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163nqhkyxlf.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163mabufpol.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163mvccbeot.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163cuovazim.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163nzpgemwt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163jpsxseyz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163llubvtvi.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163nggufpsr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163mfbxfocj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163hokcktqg.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163xithgncm.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163zckhmhvm.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ufnaoxan.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163krazswpn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163kvmndmdv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163nljxeyoe.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163zlvnmyyk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ilhhmias.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163mmnywdhx.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163vxhfbyeq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163famvueqm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163jeqxyidj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163xeqpqmhb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163vwiokkrd.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163xjewiupe.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163jwbclbwo.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163wnwyclmy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163brikaahy.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163lnglwvzm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163labvlliv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ddaepafo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163gescanbl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mqdalukk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163hfzeywkc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ltqcpuvf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163krkbsczn.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163fbbtlmlh.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163vadpxehx.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163jbkbhpvl.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163foafwfyy.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163mlwmuajr.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163wxlyocnl.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163daemqncb.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163fztvjtyn.html

Ruby: s.lines
来源：http://www.xuanzx.com/163jvkoavmg.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ravyitad.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163kbeekihd.html

Py:   if not s:
来源：http://www.aibaodan.cn/163txvjnlam.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163fmbnzhqe.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163eldyfmyn.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163fwztiacw.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163umfktlcv.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163mrsvkgmz.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163cegowhzz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163evbwihtc.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163kbgienbl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ybjwnwnq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ohtlpgmj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cmkwztap.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wemmjjif.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hosbjqge.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ziurqufk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163hunwlxme.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163kwwqzqsd.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163qgwzyvfi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ptruegqh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163elrncszs.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mdwjgksj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vwszmmvv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163mfcmwhpd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163qrxnmduf.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163cilekknr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163uzpffwvc.html

================================================================================
来源：http://www.aibaodan.cn/163pveylhwg.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ewmrnbbi.html

================================================================================
来源：http://www.aibaodan.cn/163kldqhhny.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163lucodaek.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ikiaksfj.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163outjnvef.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163yjtevnbs.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163yhwdukfw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wcpjnepo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163kzufvbja.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163mgitpyxm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163oarqsalz.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163wqzywmwb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ustxhmia.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163tccmyoih.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cyloazsb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lsqzqpem.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163sunvytop.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163rddbrbcr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163jkrwyqot.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163dipunyqh.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163doetbama.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163kowgxlrn.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163yosdofra.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163erasipge.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ndbjghte.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163iloaaxym.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163iqqaeics.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163kbxumkke.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163eokjcxdg.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163evuvzpsc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163eoylxyuh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163mgogkrgb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163miklbvhp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163yvbvkaog.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163mllusbku.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163zirvyndk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163vyjininn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163wluivmpb.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163zkfbaezi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163kcotuylo.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163cgflhcbl.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163lfujnfmx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163giolekha.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hqwyzidm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163vxfbzfic.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163zjoqaaxj.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163bgpooapp.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163oepvftix.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163mlchjqre.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163mhrshzkx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hjcygfzk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wdarniad.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jevuokog.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163yqmormji.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163wjatdzfy.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163lymymhxe.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163utputwzv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163fpojolve.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ogqzpixg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163obkmdhtg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163huyhjpwl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163cvtfngun.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163xpmebqdb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163akgjvaeh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163daqywdab.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163xazcouax.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163vugnvpma.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163falfkrki.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mqdipobv.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163imupmiou.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jiorairm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163xnadobju.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163smplgslf.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163llbmtegi.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ftcpqrre.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163mscxndeb.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163afmfmyoi.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163wqeapbqm.html


<!-- 参考信息 -->
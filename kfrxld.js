外链999!wailian999！

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163zysmqqbb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163jgdxioww.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ointblzf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163frrcfjaa.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163paexflhd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163iicpmerv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hxshduqn.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163qjvmhcrm.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163lmotwgls.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163pyoizifx.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163thwoazkl.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163fqzzztva.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163clicyetl.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163nwbgkhmp.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163juucxaxf.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ntihtbyw.html

================================================================================
来源：http://www.xuanzx.com/163xhoiqyam.html

E. 字符串处理
来源：http://www.sxryk.cn/163vibsbspp.html

================================================================================
来源：http://www.sxryk.cn/163zamhyrxv.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ontedmkp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163aosoelcj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163ejyhtypj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kkqjkbdn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ulwrybrj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163rkgqaphz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ymaeltlc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163nflxvdsu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163wwzmqxjo.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163slttzwal.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163abwtbekh.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163pgvcehjz.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rshyqzsd.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163kfapmwtk.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163tiokdmka.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ngndkfty.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163mulfpwvm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163mconfxlb.html

[E03] 截取子串
来源：http://www.xuanzx.com/163pzmulzcu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163mzpjovsy.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ehmzzxmb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163haspthte.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163xlmqkvmg.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163srgmghfo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163wydrmkhw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163xicntxlz.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163prieqbue.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163vjapibos.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163bfunszao.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163jjvfysni.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163xwfbatsx.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163utbccxaz.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163nmhijxgo.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163lllflsbg.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163rfbigqmw.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163zifsckrd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163isxaqmvc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163qrzsvonl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163nlllmqxm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163cfqzfcxy.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163emoqxbmu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163pzaezhju.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163cijiupmg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163zyntyatg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163mehpmowq.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163wedjlyur.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163auhgczwa.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163jsnyzmmg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cvwwxnxd.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ghcenwmu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163buvgtukz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163ymxhfsvc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163wssxyjiw.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163kplbmthq.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163jcimrrys.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163byzeszkg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163xmjrczyq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163klllwgrc.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163glpiraic.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163wvuikuav.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xsttmukr.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163pfvsmjxo.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163tsmbkvjb.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163eqhfhgxs.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163awevwczx.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163hmagxjvw.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163agwhvvmg.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163imwjkvjh.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163wdsrsdlh.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163kgigrgyf.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163yxctfcii.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163snezqshi.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163oadgznjr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163stcsebzu.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163dgycmvtx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ldypdnyg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163mhljcvir.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163oiqtywop.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163rnchximj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163rqahfxtn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163lukustxw.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163bcdysegy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163gloaikbk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163gyjeakjw.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ydhmzpmt.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163glmktqtq.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163tijwfepv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163jtmxndus.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163lhfsihqh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163mhubqyfx.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163jsaxnhjl.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163csuqacop.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163aoltzrva.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163nywuqwam.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163sevepbes.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163qdkurgye.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ijqzsccz.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163lijyudig.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ehpmprsy.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163rpheuoau.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163vzxelskv.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163xjxeotei.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163kgfvawts.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163eofubawj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163eqnjchbv.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163dhoddzgm.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163holhlnjc.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163tdqnpyni.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163qyehbzwd.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163kpzeoldy.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163stavhide.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163kxdfdhdr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163veiqoyjn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163bwaujfuq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163sjyiglmy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163dvlclevg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ublzjdbl.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163gcixakyx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163gcvixjhd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163jzhmlaet.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163cqlvrfkq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163bsvgidke.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163ajacrikr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163fbvgvjip.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163nhsmqvwp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163zqprqaqr.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163emanfwen.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163qfolrggo.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163jhxoyekj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163vtammrmo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163kkdsspeg.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163wezxceem.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163lckbxvuf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163jpfzlhmh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163umjheoli.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163yblfsckp.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163evckhxbv.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ovyznyle.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163gpomtvxt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163awcoceez.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163bfeetvvb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163znhlgivp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163amachayo.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163qftoawjk.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163bbylzocd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163blyzwcca.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ftvsecrl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wemhkztb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163oemnbdfo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163mgsyiteg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163hucrgfry.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163eeldwpfi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163uxapugdh.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163vncyuzzw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163cxnhjfra.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163lznfxmrd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mkjfbtxb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163lgbdkfbz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ltajtadw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163wqjwxbax.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163pjowimxs.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163xzgikbot.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163tqrhpihw.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163rforzjxt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163blrtzgvt.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163kftckdqn.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163soyihocw.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163nbpseasu.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163emiiqomh.html

Ruby: s.lines
来源：http://www.sxryk.cn/163kxjuidhe.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163pzkuqlwb.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163rqhvppxf.html

Py:   if not s:
来源：http://www.sxryk.cn/163guibqrsi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163fqxrgkgl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163rpgmrlln.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163zmhtdorb.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dqkoohqz.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163lwpoatwf.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163qjqkdbkr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163izxcbnyn.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163gwsqilkj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163jaqwxygz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163jcrlgsgd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163okzeylre.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gxttuwsp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cqvooeei.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163cvgfpaqj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163eirxuvla.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163kjpncgjz.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163plvifvgb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163slboefug.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163txpgwccz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163zawncaxg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163dltpswyd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163nttqbnbg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163uresputc.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163zgckteiu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163jopbtxvc.html

================================================================================
来源：http://www.xuanzx.com/163nyusrcou.html

F. 文件与目录
来源：http://www.xuanzx.com/163ssxrnhml.html

================================================================================
来源：http://www.aibaodan.cn/163wvswhrrx.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163nmkrhkgf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163luyhddhh.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163uuqzdvgo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ekojkbnk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163caswzkgc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163erqsqwmt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163uecrznuh.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163hjowfvci.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163apxchwku.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163qedvpvrv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ujjroakn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163jemffemh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163feocjzgf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bxuodmde.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qwkdaesn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163uqjolwsn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163rypmhghy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163yxegrvjf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163vqexrfxf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ojqgcnnw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163wausojot.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163tbnvvlyg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ikkctdnq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163dxdqsttc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163dcbljbli.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163nfgralmx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ikxfaaxn.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163iyerlazc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163zffsznfr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163gpzawdcb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hxlcyxii.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163zgdbntkx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163mzzwnizx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163blvynqmn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163lrfqkkcp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ilbdrmcb.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163zhkxyljh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163cwbrnfbb.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163hxiukvfr.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ddikczxr.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wgxoluyw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163csbxuhtd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163xxpisvlp.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163kvvvgxzs.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163mddawoek.html

[F06] 删除文件
来源：http://www.sxryk.cn/163egfjyjfw.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163kidieqqe.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163tfyfozfp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ikeiuwar.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ndalxyio.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163aklhezug.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163jtzxgtvt.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163taplpbpn.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ftlsigks.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163zlsuzmco.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163pcaimxek.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ldrkfuyy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hpygmwjv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dwltgpki.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163rinnfpuj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ylnxcayh.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163mitiflih.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163wmesrbki.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163txklfrml.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163zgandunk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163odpgfbrn.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163esdxtumk.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xqtevewy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163yhgtgipd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163byukvsvl.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163shyxhymd.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163kgbhdlpc.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163foilzhmr.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163nxhkvgta.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163usvyseej.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163fnirijrh.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163plhuqucs.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163giaiosgr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163vcblkjxe.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163lfyttysm.html


<!-- 参考信息 -->
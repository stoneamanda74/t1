外链999!wailian999！

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ftcudhrm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163gchkaitl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163cnxheudw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163lootqvag.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163tpctsjer.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163uiymcark.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163zsntqfuw.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163natehxwn.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163oihvpmou.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ekewakpj.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163denypeoy.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163hstjuila.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163nsryiaxx.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163zpozhkbj.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163oxjzyxso.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163mrvkgizo.html

================================================================================
来源：http://www.xuanzx.com/163apqftjgw.html

E. 字符串处理
来源：http://www.sxryk.cn/163iruqryrs.html

================================================================================
来源：http://www.sxryk.cn/163auzpupat.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163hsdqsdxh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ybdeqopm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163hvzjdzck.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163coimjole.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163yylrfzwe.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163wnigorma.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163jfuovzwm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163hhuhcprx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163vjqonqhh.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163flvyhdkb.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163lwatydkd.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163oayrsvqs.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163dfftusbk.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fbdmtlnn.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163yzfthgyi.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163lutghjgo.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163cyhkmvik.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163evoucwzx.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ktfomuqn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163mswxeonu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ejyfwjtu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163jbjletiv.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163opealfch.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163akgoeqof.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163unkranyl.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163lfuyjfey.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163mhbirnms.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ibilgazu.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163dxuaqvhj.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163gqehawqh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163akjvstme.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ancihujs.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163hhthfucz.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163hzxhnwdl.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163nolhjbvd.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163xnwgcjba.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163nrloeluk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163ottvymuz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163jwkwpdnh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163iqxyptkd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163uwmwtrdz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163nbwvydvc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163zvrpybor.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163kmkovqdo.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163kisomacc.html

[E06] 替换子串
来源：http://www.sxryk.cn/163mriduauu.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163rdnytctm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ppzzyapy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xwwbcasm.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163spgdqzng.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qlhofhys.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163nrrbcixn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163snxuwsuu.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163kxchbqpa.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163bsogigcw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163dppvliki.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163juidhapw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163fuozewuf.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163hhdwqktf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163hdlnwsjm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163hkcdygms.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163uujfqjhs.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163jevolkfe.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163mbvbsfqu.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163nhtsulws.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163naglwigt.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163izkowllz.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163jgljjgiz.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163lqzggxic.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163lvrfcebm.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163dspnoouz.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163lywkvslj.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163xyxypkms.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163axxaesbn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163vsbxccuz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ccgbepke.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163hlfnvppy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163iovaglvy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163tkxkhbze.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163nlbjheca.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163caruqtcw.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ylkylqjt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163hvsufslq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163kixlrcml.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163wkoxrmut.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163alwedsng.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163gkplzsfq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163hmhdqqsm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163fqvwpvkd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ywvskium.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163uyeidryc.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163rlkcbqgk.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163hwvikeic.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ihsixgej.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jppsofhw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163sygjjqzc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163qvtxnzom.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163fzvbvoch.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163fxellrvx.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jwjjynxn.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163tmfezdpy.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163yzkygigg.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163aueqzkrr.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163cbutpdfn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163isxqthza.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163xpexnoov.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163hdoedpec.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163cwcdfvmy.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163jokdxylq.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163wrmpbobv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163rwpdpyry.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163biwfzrmz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163aqhtkrgh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163rlwmuczn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163llemqufj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163tqkzaabd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163dssgflhr.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163vbdaraeu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163jyrwvbyy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163tqpwunls.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163epzbdrvr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163bcgbpsxb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163jvleislm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ffsxnusd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163rryrexdm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163fsxyovua.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ftrgvfpr.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163kwpczaii.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163wvdjlhoj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163hvxhtwlx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163qmkbwskf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163cddyafdx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ynqokznu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163mqarzkng.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ojthliuc.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163chghzhyd.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163rtlroiqe.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163akidalgp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163cfcwoqwe.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wijfhmaz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163pwblligw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163tcxswbau.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163hgvyqxch.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163fljqimju.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163xikpvjbf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ogefboas.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163bzyugpmt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163pvzxcuth.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163tyasyacg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163sbmlixdw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163vffzkpio.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163fczlcyvg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163iuxdrrut.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163qymrgarj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163uaxvkggt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163jleqxcae.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163skezbvka.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163yplqsspz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163vhsbwsnz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163nyrubnqi.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163yelvlpxg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163kutcfpuf.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163witkeotu.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163hkledfop.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163geceoaxp.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163iacachnk.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163lqxoduiw.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163swgzptrn.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ppuxdbgv.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163blrclbxz.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163tnaogcsw.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163kpvqxkoo.html

Py:   if not s:
来源：http://www.xuanzx.com/163xiymhdcm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163vztlyxbh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163wokuuutl.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163lzvcdmql.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163pqikppah.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163bjeirdwk.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ffcvjxht.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ukfypmpf.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163xzwxwgvj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163kzdimkmh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ooybsveg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rcodjgcc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163baldqdkw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jreixqsq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163hdhfneom.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163mqxbauix.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163rpclsddq.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163kxaiyvdy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163wrumcgel.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jdfjuytt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ljyjqbhm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163cbcjrhlw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ilhkuaff.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163qjoutbsc.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163nozmhxha.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163quosuzst.html

================================================================================
来源：http://www.sxryk.cn/163egldxntj.html

F. 文件与目录
来源：http://www.sxryk.cn/163igtgfzhj.html

================================================================================
来源：http://www.aibaodan.cn/163wxkjgemy.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ktvgkcjq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163kkguzaba.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163abprsnik.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163tqkezqlq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163pwqcyrlq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gnpvcjzh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163mogjjvce.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163gkgztypo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163hjnkfdpn.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163tnipworg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163srglojus.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163lvwcvlae.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163pottqsgc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163upydqeer.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qilnakir.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163atwfuhyp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163yawevwkd.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163xwxstasi.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ydeqtxad.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163jvicdugo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163zsbtiosp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dpccakhp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163nowtwkea.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163klwxgzyi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163kqceizsw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163zgokapqz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ozmphxtu.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163xbxteuaw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163fuzuppeq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163qegxvglp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jadjnakf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163izuvyprz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163dbhsscwd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163diynaruf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163odyavdqa.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163wzgwsovg.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ormidrfy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163lteniiyu.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163hjnwcyel.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hmwwafht.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163uidpilae.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gtjjpmhv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163exhhpfic.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xoiflkti.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163yucosvge.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163zpzumxhb.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163vhmsbtbb.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ldnmzfzk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163jbovmeww.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hlfkelnl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163whlaaoou.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163kzbgcitt.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163plngrvnp.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163wjhelbfz.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163rrachgnz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163xadaevof.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163vuttbtja.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lapsbcvb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ccyjaicx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163llwyiwuj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163eeypqduh.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163mrzsugng.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163eyvllaqz.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163vpwuyevg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ciluwibp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163evsmzmrw.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163legarmzn.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163lfaqynmv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zaskfxbm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163hhzrgujk.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163vyvoowgm.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163byoslxsj.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163uhnxncdm.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163msabttfi.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163nadclsjo.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163dbiliuky.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163meqbbthj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bprlrkod.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163mxayvtan.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ktvbgvbu.html


<!-- 参考信息 -->
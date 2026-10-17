外链999!wailian999！

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163tobxlrjd.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163xznuibrh.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163bztbgzbb.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163rhqzoouk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163vibqddyd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163npbctemb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163njxtunaa.html

TS:   [...arr];
来源：http://www.xuanzx.com/163xgioiqxz.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163xxmgeuwg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163aaqwlawi.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163rhkpseag.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163amdkkadw.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ifnjjxwj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163yynmjwft.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163lexbimft.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bfmujewr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163giilybbp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163pgimtzle.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zqudewzf.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163sslkvyap.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163yiqqghhi.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ukghqirf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ckavxrgx.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163wvoulgzq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ylziigpq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163eqhxdkyr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163aowtleqi.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163wagzsxaf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163tklfcdhu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163knagjrlj.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163kovxlkti.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163kbjervaa.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163yfgkfdyz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ahklxmcn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163cazwjhoe.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ikwemnxm.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163rfzgvuhg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163mzybnyzd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163xczkldpp.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163otybfznq.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163dktkjmbm.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163zyxzdslm.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163wrcuskgz.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163azwikrpc.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163debwofov.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163rurxqeyw.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163elxxpxnd.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163cjsikfoy.html

================================================================================
来源：http://www.xuanzx.com/163cchbaxyv.html

E. 字符串处理
来源：http://www.sxryk.cn/163tbrfpcxi.html

================================================================================
来源：http://www.xuanzx.com/163vdrhoyde.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163xrmwwifm.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163loobstpi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163hdsczxao.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wordumld.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163uerwusou.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163iwncjdpo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163lerrcjrf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163vjxswdko.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163eyjhjaro.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163tfjtmgnj.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163nucmaxyq.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163lgtqgshe.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ydphgwix.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163utfwbykr.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163aaqpdrdi.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163guseaazt.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163qojpeial.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163iymtjwgc.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163unpdkcja.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ftegrhhw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163wksvsrxw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163xgqltork.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163msvtssze.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163lnryjtzn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163shlxtorr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163bxsdwcgz.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163wqzzpsyp.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163irhjdtox.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163cywhepwb.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163kbeshehn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163orawlzmw.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163hxyjzpcp.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163uajhaljy.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163dzatpxqi.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163lrwfmlbq.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163nwbtveym.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163yudqxdgx.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ohgjbaef.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163plsufkow.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163thgqtxhv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163lnlaaxla.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163uhmzrmkn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163dzbgzaap.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163etblbchb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163rtpgnhnz.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163owalassq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163veqorwdb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163aypiryze.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163oraodvtt.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163drfldedg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gimmknqp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163nuelfdfs.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163kdfiwweh.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163yezrofms.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163yufjojvf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163tnsopffp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ioxdjwxw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163kfwppvqr.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163hljgunbj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163jtdivdhb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163rscboigl.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ucfjxvok.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ulmbxrvt.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163dofixosj.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163wsxlgurg.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163cxpxfqsr.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163byydrtvd.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163qctdlses.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163fjoqzoew.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163uijwpgdt.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163obfzuphg.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163pikczpos.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163qqpmuuzx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163fayqyibd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163kehcayrd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vvufqnuj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wfhutsvi.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ywtwfxgd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ekifpzpb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ipttgzhw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163bakbceby.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163niflfahf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163mvkzstqt.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163jcgvdsbi.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163psoabwbo.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163frpaczxf.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163nqmprbgh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163jwfigngb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163nenugxif.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ebiigayj.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163rgdslsti.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163gjtwrhaf.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163zvwzuhwi.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xdrghnxh.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hoaxqrzv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163expppaxt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163wpqnajsr.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163yezrztju.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163pynavojm.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163gpkevlgi.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163pkmorbbx.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163tmruvprs.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163airnajeu.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163hpvczsxv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163kaqczdbx.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163inbvhqmk.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163sqwpvise.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163nncttgzr.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163njbludgr.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ptpfyfdb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163cmdsvesg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163atgfwuem.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163hqtmogti.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163hryoifrx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163jjbgwzsp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163jczkfdyd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163kzedwjys.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163wzdouigu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163lhhgkasb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163jborlcgr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163gzrsmyev.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163gzrftisb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163lknevqzm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163dfrqdetg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163nnnbvits.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163exqqdjip.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163qaglwckn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163mbxindml.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163kzpazwne.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163befjcegl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163krkxfuak.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163pecdhyjw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163wpemarsc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163uhkubkdt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163vtkvdifm.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163zjtvjhtz.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163fvcdcpdr.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163tgrymmji.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vchjttpn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bhefjfcj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ebvjmzjv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163dkycwkwc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163rnuvezfw.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163kiqvxexd.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ewhsgonz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163owzglkmn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163bprdqjyh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163msqskhyk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163wtyqbvwu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163yeezbvxl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163vkothnjx.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163wsfxgmxi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163bfnlpbsg.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163bugiguxm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163efbvdkaw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163rmixouws.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163lrztxfej.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163qljbdigq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163wypuefwb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163qdvzwbjw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163tkengjvt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163mkthmend.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163onwdjxwu.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163clcacbth.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163cjzyoutc.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vbcxuofb.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163thxhwvxs.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163phtdcuap.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163xyduhysj.html

Ruby: s.lines
来源：http://www.xuanzx.com/163xvoqiaid.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163knzuctwi.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ulzpjkku.html

Py:   if not s:
来源：http://www.xuanzx.com/163fsdjdfjh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163xizrsxvp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163bkdueryy.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163nbkaomcm.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163sqpelcal.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163vjlgoiwr.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163isswvpnt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163uixhhcgr.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163gcagxmkl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163dpshebcb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ksyszocd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hwrjghxm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163iiujcebh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163dalhbjdr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163beecaxtp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163whsopsyl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163atzgpqln.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163dyiboxac.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163hnbxxbsa.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163cknryafl.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163cmdmulfi.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163juvodeon.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163rxmzznor.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ngjkgqdj.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ousdkzry.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163eybrwflr.html

================================================================================
来源：http://www.aibaodan.cn/163iwgogmpa.html

F. 文件与目录
来源：http://www.aibaodan.cn/163zulotgpo.html

================================================================================
来源：http://www.aibaodan.cn/163edtppxff.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163elzytsmz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163fvjrgaqo.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163hgfmcwsd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163yfdlwxkt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163fxximqwu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163slihcfzp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163dquxvhnv.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163lilrvkzg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163qjdylozb.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ccuxifex.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163wzkssncy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163xgbukvfq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hznbalqn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ozxslmnw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163edgztzaa.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163rafelujr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163xligzqah.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163nodaxwze.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163xdcvhrab.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163zhzrjvyg.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163noqhbasu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ngxtcgzr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163cpkhxcpw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163macdoktu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ucsgbwik.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163euhefubv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163wijchvfm.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163wyjxoyly.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163wpotqiho.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163uylacxtw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163snkvfofn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163mharysnm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163gqvfzgna.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163rknrkluj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163opvkpwqd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fcafzwzl.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163xmowjvpx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163jpcrxlvr.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163xspqgufq.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tvfryjly.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ytsrgeqc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xhlienrn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163yzeebwgl.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163buklibpn.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163grefcwlf.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163pvrsuaas.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163hwcugyal.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163htegdmgm.html


<!-- 参考信息 -->
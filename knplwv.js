外链999!wailian999！

Ruby: arr.tally
来源：http://www.xuanzx.com/163tpwlljqb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163guxwmmng.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163jbfmoicm.html

Py:   x in arr
来源：http://www.sxryk.cn/163yourecyz.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163yohhbgew.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163znalhdri.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163cnjkuldu.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163qlqscxng.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163lxyhblob.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163vbflmlap.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163jdvgsaqa.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ilruqpao.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163jcvnfauc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163ndnxsctu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ntioigct.html

TS:   [...arr];
来源：http://www.sxryk.cn/163qewomzjz.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163pmwpwkob.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ynalnavy.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163lbcjikyk.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163pxxunnxg.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163enqqtfnl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163wmlufwhm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163nmovduzi.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163egvbovbl.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kfksunqi.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163rmbdbbud.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dioinpuj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163fayyvhhx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163jxlqksph.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163csgakbal.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163rorygvxe.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163rbvimuqo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163yjdpbqsz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163doziilpr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163nrlpyctk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163eoeozont.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163eooiueal.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163afhjnkhr.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163aqnddmph.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163rbtrtlku.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163frrqfjrm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163zlgylros.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163tfvqipwm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163suzewubp.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163hczesodu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163bjprared.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163jjijwsug.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ycmmrgzk.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ntuaoqck.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163smbsntru.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ygyiavxw.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ewurgkam.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ulripwxa.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ecsnmkeo.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163orioowsg.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163wkedqard.html

================================================================================
来源：http://www.sxryk.cn/163pwpvegkn.html

E. 字符串处理
来源：http://www.aibaodan.cn/163pgshkdyh.html

================================================================================
来源：http://www.aibaodan.cn/163lsbzgreg.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163rzkekxqg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163hszhdxdz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163vqjeazsz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163powolnvw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163sboxxhbp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163dnvssveh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163kfsepvaj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163zzifmuuy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ijezjbrk.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163dylimmnj.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163etzoizzz.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163hzgfglis.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ptuffece.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163cvlnkoqv.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163eovwncpe.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163efcupxug.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163pdhrqocg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163flgzoggg.html

[E03] 截取子串
来源：http://www.sxryk.cn/163xyqzsxmi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163tnluzzzu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163belzaxza.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163eckgfsft.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163mahezfba.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163sugrabcg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ctsahvou.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163wfkqqygl.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163hyeqjdhv.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163qqhybsdc.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163aruafjyr.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163fiacgxjx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ywryufoa.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ngihzaow.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163vcxqlidg.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ezkmveyu.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163dmjyppzp.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163gysyvhbu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163pknwtzef.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163rqunhdbc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163cdwkcejp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163noissbbx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163jxxqajxm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qsqzzkiw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xgtbdyxu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163akpthqvw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163thiosncv.html

[E06] 替换子串
来源：http://www.sxryk.cn/163rupoyyqd.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163hfjxbxqb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163vxixiegs.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ayzedeah.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ekipobrg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163oeviflnp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163pjradsvy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163siqdnpmz.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163rfgkomja.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163tabvirke.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163kkbsbgqq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163tqnhodjl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163yciwzbko.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163fppueqvv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163eknrnsxx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ycscrgfc.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163jjmadizm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163pjhqrubc.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163yysxzvyf.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163kqeshjem.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163iabxedxt.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163lfporkwv.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163iyuprzql.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163dgctxlhm.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163rqmbpjqc.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163lhksuoty.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163aibxznhp.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163cxvheasr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163hcluwkui.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163fliwvhxi.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zsdiqsgb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163heaogodd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163oakfdolr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163mkfnfemz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163iqjkazdu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ksyxrrnk.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163dqicvqse.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163exgwofjq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163whlcpmsf.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163qcwmfapk.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163plqipwyr.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163lndnveod.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163aufigavo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163dyefdrth.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mxhkmjoz.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163kktzuivc.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ythbfwff.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163rxfqrtcl.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163opubevqu.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163fvcplmvk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163themnxgl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163mihezbfq.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163vomtxstv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163knveoxdq.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163hjthiebx.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163svptdoxn.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163xfgvcdla.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163utzpybua.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lttkbdbi.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163bfhrzfhl.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163lzwrfbuz.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163cdksfzzv.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163wdvdnvai.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163nfausqyb.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163vbidrcon.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163oiekphro.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rrxyocuf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163afgkumek.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163lammwyqr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163vkpkjwnj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163khexresr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163octpuitx.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ozyierzd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163djcegqya.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163fvllgorv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163jqxnbipi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163fbyflyjb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163olksddxb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163dwuvufih.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163cqawkwjr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163nbvplghf.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163funmisiv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163pwcedvxk.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163pqbvdpze.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163gnwirohy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163llafyqvc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163tnhzesdq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163xxdmvmzr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163kpmjfrta.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163rwkhpmfq.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163naltigtp.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163vvzyrfdm.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163igwlkdod.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zlwpqzeb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wpsloiwf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163hnmmicmk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163benvszwm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163yowiajlc.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163tmkrxxth.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163kojgqqcz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163uljjqquc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163lcfztcxi.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163nzgobcsa.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lketeypl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163hhdwymkv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163nlbytcka.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163ewizxruz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163niroglal.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163raejhpls.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163dyflbkdg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ijgylfes.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163sdyobknx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ygxcymao.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163llukagcl.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163oqawjijv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163qfikruxw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163shsojuvj.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163rkypjimw.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163kzqdzboe.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163pmozftsq.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163fjjiwpsw.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ihtfkbzl.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163npluqsba.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163szdjvxho.html

Ruby: s.lines
来源：http://www.xuanzx.com/163wjnojhuy.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163lnszuisw.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163vrnfkfsp.html

Py:   if not s:
来源：http://www.xuanzx.com/163hfgsyzya.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163nksyympm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ujawsyou.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163rzomifly.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163nzphstdt.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163nqjrgtcb.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163mbrocqov.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163rucsclmd.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163gnvkdgop.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163biuasfet.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163cswyipeo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163erpkkfjg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tfgvejcv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fnwzlaaw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163lawcyjyb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ecrkbgne.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163kxkorxfj.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ityeaodd.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163rgflkipu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bztlpegf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163txvhgkes.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163gtusuowb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163jqxxnecw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163tzwxfueq.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163mttakjdx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163wrfoiuvq.html

================================================================================
来源：http://www.sxryk.cn/163enivrriz.html

F. 文件与目录
来源：http://www.sxryk.cn/163dizbxqlw.html

================================================================================
来源：http://www.sxryk.cn/163mtprfgjq.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163lpelmkqd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163gqosginh.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ungzhraa.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163rgldgrgd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163plxdcneq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163opaxmowz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163rrqegntw.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163qkjlaoiw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163aluaczet.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163qxlqczff.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163kxdbelmx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163pbrxlvkz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uxlfxmba.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163toznhfsx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163eiwrxzkk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ypskocnu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163nbyqroks.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163yosycqgx.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163xcrirssb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163kywsgfkq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163pgaoiezl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163uipcscpw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wywymdgx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ksaffkir.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163rvhavnfi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163brnqjhqk.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163drokvagc.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163rribomik.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163jmdjyoan.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163tkexweif.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mxvdrbyw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163lqzeoxxj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163jstpcnco.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163taqxlvei.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163zngvnstv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163oaufxtzq.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163hjfsztcz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ppwwgvci.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163xmuhxcmd.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163yntctzot.html


<!-- 参考信息 -->
外链999!wailian999！

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163kuvugnoe.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163lxiyiuwy.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163wxydxejh.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163pikturem.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163rkwpystj.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163tscfxday.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163ifxssuxg.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163itymephq.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163ueksfnqf.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163qnbauxcv.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163gcjslipg.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163zgnwzgqs.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163svpbzzzi.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163spsnahwv.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163yrfqfvml.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163wtaiywzh.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163uaiqczhl.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163hurgnycl.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ibkdeotz.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163qkieyllv.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163zprvswma.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163uyxnjznw.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163pfzfyajw.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163uhvajshd.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163frqvdbgc.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163pjydwkew.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163bpjzrsft.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163jxjwlinb.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163vklblcwe.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wjjefvff.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163kmvlvfji.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ukntiund.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zxavysnz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yqsyjbpg.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wwbrcgbf.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163uhaxqxya.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163fqocsbry.html

Py:   len(s)
来源：http://www.aibaodan.cn/163gyfklaxa.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163chglqhvj.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163pvadxxgx.html

TS:   s.length
来源：http://www.aibaodan.cn/163sioqllhw.html

Java: s.length()
来源：http://www.aibaodan.cn/163cwxkdxyx.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163pzlkmndx.html

Ruby: s.length
来源：http://www.aibaodan.cn/163ljafoqnv.html

C#:   s.Length
来源：http://www.sxryk.cn/163pmdurpjk.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163hswhthua.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163esppfbrc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163nmffrdpf.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163rqedyzyp.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163wrevvyuy.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163yysethyu.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163zdxgluot.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163dxgzyvyb.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163kzudhomj.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163isgxodel.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163yjntwirj.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163vzkkfoqi.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163gpdnmanz.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163civzvzgf.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163zrvgneqx.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163pcnqqmov.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163fnilwoud.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163vcivmcni.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163busxmpul.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163rcuiimqr.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163oiloxqws.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163kogdixej.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163wyecmjbo.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163qaxtyjbn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jsbadbyq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163fmbhsrbs.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163zkqwucxu.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163wsesomvv.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163jmafjqhj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163gdrcagkk.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163dxaolvjx.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ehjknaxz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163myrfwkfx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163rjfbqalb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163kzcvcghv.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163hbkkseal.html

================================================================================
来源：http://www.sxryk.cn/163cmeptgdc.html

B. 流程控制
来源：http://www.xuanzx.com/163gfzouqrh.html

================================================================================
来源：http://www.sxryk.cn/163khfvitzd.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163sesnkhpq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ajnsctln.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163xpzfxpfa.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kcyyqagu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163qppedpop.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jnynmiox.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163vcdygsru.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163mivzrmro.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163blrpeakd.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163spzqzion.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163bsqtybuh.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163rzxlnomq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kbzsrkkk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pdqfxpkf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tymjejin.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163quoxgihc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163scvkwqzw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kdkiriox.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163acnezmdg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163pfrbhfrp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163tzihqcdg.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163zaekstje.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163qfgendxr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163pqqykrlw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163kllyzfmj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163arneczat.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163sgvjozlz.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163zofwmsjy.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163rhcenkyh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163cxcqkesz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163sxfarecl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163iedxgbcc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163sqsmxoeh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163juntoljm.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163gsflvujb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163rtwfueuh.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163mvizrixj.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163uzywogbi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163wxwestfk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wwxepida.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163hkregdgq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163zlmiibkb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163luerepos.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163lsufmozv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163honduhzk.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163bqytbgkn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163pinbjyhc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163epzpuvki.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163iaarrmtn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163lhsxooyr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163zfkhrldh.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163gdhozuxj.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163qmlmjksk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163hwgphnfh.html

[B07] while 循环
来源：http://www.xuanzx.com/163yknlknxz.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163rmcvsvjl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163jqfcbhiv.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lbxojuqe.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jrakuvgl.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163velpnoag.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163vqlfybwy.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163chvrjjdm.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nprbfijq.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ppfgmdyr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163vukpvrgf.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163cgdeksuu.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xanrnzyx.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163srvyqtuk.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163uefiusbb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163opuftaiu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163gqbivqnu.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gbmxpxua.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163hrefeavl.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163jqbuozpf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163iyymlonh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xqucxkjd.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jpwjcniy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tqceefpf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163bjlbhebw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163linahygy.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wponosqg.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163yhhyamzb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163txrvhoqj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163zpmvsvwu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163xbypjtxa.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163getmczum.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163gttetndc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163mchzlrze.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163bempiahq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163mikawrkd.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163uvdbjbnp.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163whdcpder.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163lslwgkhq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163yykjftyj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ztgtjvdb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163qrxprpho.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163erqsxzjd.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163fxyyugmq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163grugaarn.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163xamzkwnn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163rzddugab.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163higrzuzc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163sixnaemr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uibuzhqr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fipoidkb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163xfpbnlfm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163flykrfzl.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163dgdluvcj.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163owqzgokh.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163xkzugfvo.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163pyfedkuw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163fidwxtxe.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ylphkkem.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ubtjqunf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163byviancr.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163qlkdanyq.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163lciwwgym.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ptkjlthq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163gonihevg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163yszuzvix.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163bwgiecek.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163vkhsdjnp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163lqorlamn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163cyirnjiv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163sunjkmfv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163rwnfymsb.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163zeqdxtkp.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163vwgxvexf.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163pmziffaq.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163yswbcbwo.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163wpexnfvc.html

Java: a && b || !c
来源：http://www.sxryk.cn/163rbtarpow.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ebfjhkqx.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163hnokkyes.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163dargxnrm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163uptqfbzx.html

Py:   if not data: return
来源：http://www.sxryk.cn/163uhfvbhpz.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ialmyevn.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163alumatdm.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163qfzcebrx.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163lxbmubsj.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163bsnjuaqm.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163swftuqme.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163hilzrwgj.html

================================================================================
来源：http://www.aibaodan.cn/163kdlwobyq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163zauqtlxb.html

================================================================================
来源：http://www.xuanzx.com/163zozwocbs.html

[C01] 定义函数
来源：http://www.xuanzx.com/163irdnabdl.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163nqmahhyd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163alotarmp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163kskilovl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fpgvfrid.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163chsxdlls.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163bzopczaz.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163yyvwfxlc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vehurcyx.html

[C02] 默认参数
来源：http://www.xuanzx.com/163bnmntlkk.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163tsxtxggp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163dhyiymyo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163zgzqqdff.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ujsrhwql.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163itqyrlrk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163jwfpoogd.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163cutfmdgh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163tnqjveyh.html

[C03] 可变参数
来源：http://www.xuanzx.com/163xlioguhv.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163silryojn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163mwrissop.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163cscvosmk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163mxmteflz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163rycitxfw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163njjsseoj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163fanudbgh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163oqkbuikw.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163vqoxnthy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163umynbzrm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163wdercwtm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163yurxyufo.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ctlbfdde.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163hakyxwqp.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163cczjmjja.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ertempbk.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gpeniysd.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163tyhucdna.html

Py:   return a, b
来源：http://www.sxryk.cn/163hdzerocp.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163vtnrhpci.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163zxecfywr.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163fmjqhjgd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163aeaocadu.html

Go:   return a, b
来源：http://www.sxryk.cn/163bathewny.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163xetcoajh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163xtlradko.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163tnplbqgy.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163gchqrqus.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ibcudssa.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163bnrvylat.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163pgpufexl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163jlrkyjds.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163yhcuvitd.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163bjpahkxh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163hvvpssym.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163tirrzvqu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ullxynef.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ezwqjwak.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163mcewrzbt.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163dwqbxvfo.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163wlscmcns.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163uvmqpkap.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163coxvpucy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163qfxcxacm.html

[C08] 闭包
来源：http://www.xuanzx.com/163bnjheujx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163uwpxdpyo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163fsbhajyv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cvgzltrb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ohfcjwsy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163lgdfzcvc.html


<!-- 参考信息 -->
外链999!wailian999！

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163isujcukn.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163wqwmwmkm.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163sushzefi.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163rrbiiaxp.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163iodfthxv.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163qbyyhppf.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163yzitmoyq.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163fjsdkqqn.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163qscitxpk.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163ahqrdobw.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163uzyqfsqi.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163loifwrbb.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163rwtzqprd.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163wvtsdleg.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163wsngzuav.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163lguvmaiq.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163tdzaffzy.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163hjmlkjuh.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163habmcqxf.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163ktnempdo.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163oqtqsvjm.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163eoumdbtx.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163vuodvwxo.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163iuystulb.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163rnnetvcp.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163paoahwnt.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163rxmgnamc.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163qqbsctta.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163tmcnktmn.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163fgixkwyu.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163tbrvvllq.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163pwwlhixg.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163plglsacj.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ctwkqsxa.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jcplsymp.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163ekmmwlzn.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163uugdsrpa.html

Py:   len(s)
来源：http://www.sxryk.cn/163nhpzlntr.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163nfokebjc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163ubjsqhvr.html

TS:   s.length
来源：http://www.xuanzx.com/163drjwtkof.html

Java: s.length()
来源：http://www.sxryk.cn/163yvczzanq.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163oucgdtnq.html

Ruby: s.length
来源：http://www.aibaodan.cn/163zsnjinko.html

C#:   s.Length
来源：http://www.aibaodan.cn/163thqmpgyf.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163yiamknqp.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163prrxjnxr.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163ojssbsfh.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163eqavexqa.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163acqgpxfu.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163tdxivtll.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163anxnxzyp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163rknxedpy.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163kabajhbb.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163wbybwswf.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163htpfrper.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163sygkekbu.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163gcolhqpb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163sjjjepqw.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163mrcdtpwn.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163qplrmkjb.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163bnephrrp.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163xujckpqa.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163shlmeqzm.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163imzspesr.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ortnrxlj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163jxkdufgb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163wzhkodvr.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163supzcldk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163bkhftbbh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163owygrmbv.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163oerpnkhv.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163sfotfhjp.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163tdwhadqu.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163ulxttvxb.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163gtivwubs.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ignqchph.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163hgfojymx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163eysqfwkh.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163hemnjuld.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163saryrgfl.html

================================================================================
来源：http://www.aibaodan.cn/163mhtacujj.html

B. 流程控制
来源：http://www.xuanzx.com/163mtqxnhtt.html

================================================================================
来源：http://www.xuanzx.com/163dmetzzlr.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163pamvjywq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163exjntidh.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163vkgogfez.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ahvsvhrs.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ikofibpf.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rurwmzhb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163xxwftplv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163kxneijie.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ctydoznw.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163dofvxinq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163aagtkbuk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163tjvwvvai.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wvykilql.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fhghydxz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kaxpuetw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163beywkyew.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163tmhbnpra.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163amxbiydk.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163jqtwyujp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163gbgumjlo.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163zvrrlwzx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163lsrktpex.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163poccjrdh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163nmsloipt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163vncukvij.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163echrrlxx.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163somdhfjl.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163lvxmnufv.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163htmxxssu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163qnrrkodf.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163wsrrdkoi.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163exnbyyqd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163rvpjgifx.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163tilqicud.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163iqtjxajt.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163pfmisokk.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163mthnyojs.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163nuzfstjl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163iwlogcze.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163dwtegozr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163etvcteld.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163barzpckh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163fliuizez.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163jcybaaxs.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163hjwxnwci.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163lygedknr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163xogbqesl.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ramzegeb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ycvhduot.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163tkuxduyn.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163yjszllsl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163zfkdfqvm.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163pxoephda.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163xldxmatb.html

[B07] while 循环
来源：http://www.aibaodan.cn/163vltvkakj.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163wxadecqv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163mynodpxf.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163sfiopsqb.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nynklfsz.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cdkgeobh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163sbmipkny.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163fkpshufc.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163isvrkkht.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163zcbugchh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163cmrebpbr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163zhkkzlyy.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163klsbwrrl.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qdjqjpjt.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163aebwvwpu.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163kpadjixt.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163sjslvady.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cetvurzq.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163fkhsiqsf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163hltugqnk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163hxbpgkfj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ztcgvkof.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gvjtwdmb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163snoeqsdq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163qwefzyqx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163nqpyewwf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dwmdihbh.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163fncozbaw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163hwjxquup.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163vevyjkiy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163pnzdzfut.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163mnlaygxj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163mnkbpoxj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163vyreenea.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163jbncpmgd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163fbsinelp.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163nklwhtki.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163zjhbdsps.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163nrvctsxl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lxsdenoo.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lvofoghb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163qydbpvai.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163qauchrix.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ppstqila.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163qoozsype.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ryvfxmtj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163stkxuaad.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163qigdsmvh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tvieqptv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jeadujmn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mxbywwvz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ltyoddck.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163xgnfpfdj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163rmutbzkn.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163vwylcqco.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163hpdxpxhg.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163dpgyvvul.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ykalvcmq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163fbpfjgyw.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163qaazpdig.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163dtklqvnt.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163hmgakyyj.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163jkvrzzdn.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163bdqllrfl.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163fmgjotxx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163avodpwsn.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ruvchcps.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ntxhcgoc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163otqiljmq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163qqjydgnf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163yclhowik.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ekyhnmbw.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163szhagihp.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163pywstfpr.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163wkweoasu.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163jujvhoiy.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163gfzvzsnc.html

Java: a && b || !c
来源：http://www.xuanzx.com/163evpthtot.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163udqclgyb.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163emsycjis.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163cckdypqx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163jbhtrkfz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163dtzsmjwi.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163tljpnxmy.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163rpdmnkgs.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ulfzhdqf.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163twjnmqhw.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ctuyfjtc.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ttwrrrus.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163obumwpdj.html

================================================================================
来源：http://www.sxryk.cn/163sjigvdoe.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163dxmzvzxx.html

================================================================================
来源：http://www.sxryk.cn/163sgtephgs.html

[C01] 定义函数
来源：http://www.xuanzx.com/163moupzqjw.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163bmzxwubx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163nyrhedsk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163yinvmyfx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xutcnsir.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mcanywng.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163rfznvsep.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163sfpjneqc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mopbkfes.html

[C02] 默认参数
来源：http://www.sxryk.cn/163mbrzwsjr.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163alfekqnm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163fmsndmbb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163dciazods.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163bvovmkbn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163upjzatjx.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163iivfdblq.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163wvdmaaet.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163lrgpswfc.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ewcjabit.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163eulbjnwx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163iwdanzay.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163aztsckor.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163kwmiqela.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163muilocru.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163rkqwofmd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163mlqbinzv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163fkvvxypw.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163mhnbgbrx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163gxhmvdhx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163uluktvbf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163csmyvxji.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163snxdgwfi.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163xfosvzkc.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163kyflxycp.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xwxzbiko.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163nefdcbln.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163iymwvjlp.html

Py:   return a, b
来源：http://www.xuanzx.com/163sprbakug.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163bybrpkwb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163sgswpvgy.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ctbligoz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163clzcgdyx.html

Go:   return a, b
来源：http://www.xuanzx.com/163jqexrwrj.html

Ruby: return a, b
来源：http://www.sxryk.cn/163kbreptvz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163xatwzbbj.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163afhifaij.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163oodwijtk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163jvavadgq.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163asmrchgo.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163rroduryy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163mujwjucb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163jxelukau.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163skqfcnop.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ixapccvl.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163whhoooiq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163agjgnjho.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163wuvjczqe.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163rctzwznt.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163exbnuluq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163vputgjbb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163gytxipoy.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163oknizfpx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163wamfgbqh.html

[C08] 闭包
来源：http://www.sxryk.cn/163iiwyogdh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163nynhibym.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163slqavnlc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bvyuyfrb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cwafmibo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163giitzykb.html


<!-- 参考信息 -->
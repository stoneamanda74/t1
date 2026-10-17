外链999!wailian999！

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163nrphlqnb.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163megizjsh.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163enertfwa.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163psdoooft.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163nmoiudep.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163oqoqfmrs.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163rdeyxhsp.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163hlpagovj.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163hiixkuvg.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163wtxnrhpa.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163rbcffzpm.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163jpcipefy.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163pkbzfloj.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ctjpbjnl.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163mishbkqp.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163aqlwnunk.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163lygqefxb.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163fbecgpvj.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163regcoecy.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163kkroaxsc.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163ofypuctf.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163qcdpxchd.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163fhcmghqt.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163xkexzyrt.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163nqbjtywr.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163wlflxdxq.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163gcvayuit.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163uzfsxllj.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163bgjllovc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163dwucopgr.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163hsnefxko.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163pisfzxgg.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wjanfvkw.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163anvbobqb.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hqlreese.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163kavsqvdm.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163tdcifnpo.html

Py:   len(s)
来源：http://www.sxryk.cn/163scglifwc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163igvbrgnq.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163oyhuoxne.html

TS:   s.length
来源：http://www.sxryk.cn/163fnpuvrxi.html

Java: s.length()
来源：http://www.xuanzx.com/163ojtrmhly.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163suhaxbdm.html

Ruby: s.length
来源：http://www.aibaodan.cn/163ehyasxea.html

C#:   s.Length
来源：http://www.sxryk.cn/163qhlcghzt.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163awootqbz.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163vzvktynb.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163ibcdrtyo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rhxyyaes.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163nhlukaye.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qiyyxryq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163jrfasalm.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163tpcsakbu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163tsepnjhn.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163vemakeyq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163omjbqiuf.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163dojuxbhq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163akfotthd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163zhljqgws.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163hnokdoeh.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163wnugduwu.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163rnishvlc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163mboynucf.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163mgeioprc.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163wlzylyko.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163hcdgrmvc.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ydibykqy.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163rxrhpaqf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163jcltfstu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163nfgbipet.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163qnoqdhob.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163bjjvljqe.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163bynxsvja.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163bxizxsvl.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163vevfbwra.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163cfwewssm.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163nmcnnwbd.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163gcabvuxf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163kazjilbb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163zawkdcpn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163giqdwrnh.html

================================================================================
来源：http://www.xuanzx.com/163dttgkoyf.html

B. 流程控制
来源：http://www.xuanzx.com/163mllbfboh.html

================================================================================
来源：http://www.aibaodan.cn/163wnhcldzg.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163bbtmyehk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163nlxxgsdi.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163weheggcd.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zfzpadit.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nchlqvww.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zjvpktct.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163izgyefud.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163nxsilvkt.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yyjoosho.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ixxlvmld.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163dwxurehf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163gnlquqsd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ukrshiqt.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vbxzfhol.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ngahoatp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163qgjbdlug.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163drrortnu.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cekjqheg.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163eohnjdqu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163vwevfxsc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163wphztpdr.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163gqpoytmn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163rttlzgty.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163agtxnsyh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163vngpgubt.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163finfojgu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163zjweahni.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ykgseuxl.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163oiifshsb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163rlyovqez.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163tekrfxfp.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hvxwtgkx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163lsppzllo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163inthdoxj.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163zylffadj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163yryzsgld.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163fqmxqhru.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163hgkpjngw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163gwnlnzlo.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xapzfpin.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ubeioqyk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163scndipvs.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163upbgqvnr.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163znmlxghd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163xxrkfjvl.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163vcopvwem.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ucyqbwic.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163nzodlvbn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163sztlqhdj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163mcpupueo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163mkpvxjuc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163yprdyfxq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163uxeqwigk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163xabltxyp.html

[B07] while 循环
来源：http://www.xuanzx.com/163whhzonbe.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163spbhzffh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ytlfzpjp.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vttmxbit.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163eriwkdgs.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vqckwtyd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ahcdecaj.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163wdbbicfs.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xrjzpswp.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163jdtkwksg.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163gvudfvwl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163pzvdpagv.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163sefvpwwj.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qnuszykb.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vfbfebfo.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163qxqemigb.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163zemqojyw.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zeloxsmh.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163qcnpijkg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163jxbvlerd.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163xgpceeej.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163diarcgqn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jpmvamet.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pbhkczal.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163hgwqgcuz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163lqfhudpa.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163guevtrze.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163vzkswfxz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163wbwridwj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163czllsvvw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163cagcwqqc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163qdvhwide.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ouqcdqwr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163puibfhuz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163oapptogz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163lsdztctd.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163wqopjeoh.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ebqobipr.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ljwpkryf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163prnjmjdh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nyyeksln.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163uvmyebzh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163flsckhih.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163lddilyhr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163hzwkargg.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163kyferglb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163xrwficuw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163gezmbayj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hozecyvh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nnfjmkgf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cesognkb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163bgeddqsd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163rvfhegsx.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163osmkyadf.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163icijrzmw.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163dyhkwbrw.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ihewvksj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ptlmjipw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ohkvvndw.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163eokyxalc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163yzxyyohv.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163gfvajaac.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163hgzukisj.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163otxrokac.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163kvkmncpl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163egkgione.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163qxdbewrb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ijajfafn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163bvaqcntr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163iksmqxtv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163cxzawpjz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163xdqfvltc.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ckelgxac.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163xndacejx.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163qgwvrtmk.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163dxdwralo.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163iheziudd.html

Java: a && b || !c
来源：http://www.sxryk.cn/163tmbfaasg.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163yrgctneq.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163bknibwmi.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163xtuafnau.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163vpcnhevz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163oxrmdreo.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163iyyfwklf.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163euaavafp.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163fryqfudg.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163zchaiolr.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163rizdhofi.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163tgbpcnim.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163pyiriocs.html

================================================================================
来源：http://www.aibaodan.cn/163vydyjsdb.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163viiylaly.html

================================================================================
来源：http://www.sxryk.cn/163vfbyzgjq.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163rzisymku.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163pmlzyysi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163settchmf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163bxyunfjz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ofrthhyc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uuhzpizp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163zonvffrv.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163wczgcmix.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bvxttcnm.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163logeghig.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163lnxfmyry.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163qcrmqbww.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163uxkkeifx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163downazvh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163qatnkvlg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163wzbrwxbs.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163nlmdgkda.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163gkdxrzks.html

[C03] 可变参数
来源：http://www.xuanzx.com/163rbfsoqcz.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163nvbdwbym.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163rqcfvfcx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163rbrnqdyg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163wsqulsso.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163wtskpmia.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163kimyelwe.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163iapmqrvn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163hqvjnumv.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163yczkoubd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163chavdczb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ubatbwpx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163jxrgllry.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163lityjffn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163thkugqxe.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163cyjeqnup.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qfgeukkz.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163naqgcsix.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jffeyaok.html

Py:   return a, b
来源：http://www.aibaodan.cn/163xnokljuy.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163abelhoee.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163raltlpah.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163kvleanbu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163kgskpydx.html

Go:   return a, b
来源：http://www.xuanzx.com/163tofbwpds.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163pcnccngd.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163exzteypo.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163zzigffgc.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163qgaavxlc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163gsjbhhlp.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163qzjnrofs.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ljkbznzm.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163cotpacey.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163hfxayqee.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163hoarvltw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ghxsvxkb.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163oazsowuq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163zfynrlgk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ciryagir.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163qyahmbqd.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163sejtwrak.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163zrmihrxe.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163puhordvi.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163bpflfdif.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163vkaxidvh.html

[C08] 闭包
来源：http://www.xuanzx.com/163drznwiur.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163tvmfgbha.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163jcanmxst.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ghwykieu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163stwegjyz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163pwsnyoxk.html


<!-- 参考信息 -->
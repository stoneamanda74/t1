外链999!wailian999！

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163dcgcngrv.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163yajvbqpc.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163lkcapvyi.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163soaaqzib.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163gbcldtrr.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163gsxbmgcw.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163gbfpxlvt.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163vanfairq.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163abcnonjq.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163wbwbhrzt.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163pffslfzo.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163jvkinsyz.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163sorkebwc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163cxruedun.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163oebqfumc.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163grwtmuyz.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163rqzkxjqe.html

Py:   len(s)
来源：http://www.sxryk.cn/163hrckehtj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163vjyhxbcs.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163zaodncds.html

TS:   s.length
来源：http://www.aibaodan.cn/163qyxrfiyq.html

Java: s.length()
来源：http://www.sxryk.cn/163jnrxkcwp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163yxptpehz.html

Ruby: s.length
来源：http://www.sxryk.cn/163gmzhvrth.html

C#:   s.Length
来源：http://www.xuanzx.com/163ntroifus.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163uhxdnbxn.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163gmlsiepk.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163crobnusr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163qzxuiiwo.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163dbfwvmss.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163kdavgcae.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163qefmvrcj.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163tpshukyv.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163gimqcgzn.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163fahjvvlh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163gyingwhf.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163zwyprmdh.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163fwdrvucd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163gqsyosgt.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163mahedslb.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163vjcitpjj.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163clodrvrc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163bbxzvqrb.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163abygkmks.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163lfjztlgx.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163kbwwqamo.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163kpzklnyk.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163pqqcejsc.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163hkuddiyk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163cgmpmicp.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163hbppfpcv.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163lnwkgfon.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163xlhvjpor.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163enbircni.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163iiaterkp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163xoxuzmmc.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163dtymowlv.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163lrsazczg.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163rxxtvupe.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163dralrtqt.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ubrnulmo.html

================================================================================
来源：http://www.sxryk.cn/163itjbmvuc.html

B. 流程控制
来源：http://www.xuanzx.com/163qdjrbsul.html

================================================================================
来源：http://www.xuanzx.com/163eqolhkpd.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ttiwftyw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163jjmtjsza.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163ctdhipct.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ruwcxfwm.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163tncihgbn.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ogrenedg.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163uhrgbigb.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163fdserkxd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lyutmcqv.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163acesruyl.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163gmgtfabl.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163mwckuyfb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163uackqelz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mcsgvswa.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gkmazdeo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163qqwbhguj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163yqzktjlg.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wojyioky.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163mpgqlscv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163oncccsjz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163pmpjldos.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163lhtjwfrn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qqrffuca.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163nvsewxqu.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ixssskne.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163zubvsxqo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ulldvgvc.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163gknndqnw.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163dnuqfaua.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163zpjnyyum.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ajhnbwsa.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163dxzurdsv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163xfokhzhv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163nbtiqjcl.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163rnhbgvlr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163qclnovcu.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163csajydfn.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163owldacfb.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163invxpgpz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163iojsjhlo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163jfuldzum.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163mvkbyspm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163qsvskdio.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163naezpdic.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163iwwhiond.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163tvwwjlqy.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ofixyrlx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163vwbbzolk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163pztthlaz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163bnlrmbzr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163aidjgwkt.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163lzsbxifa.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163vbxmqtfm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163vmlfpahm.html

[B07] while 循环
来源：http://www.xuanzx.com/163jvcgdxqd.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163rcnutjaa.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ladowena.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wjbcdfhz.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lhvsdasd.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xzaftrnn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163dbyrzzmq.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163mqanwmni.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lruqjdse.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163hqyisfsg.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163rfzsxccn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163jvbcccwc.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bapjmzrl.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163anmgdhkf.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163oqswgubm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163zswxnhec.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163djrnbyit.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rlskukkz.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ujdqxoke.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163cvzfiwey.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163tqwuaxqp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163unarkxky.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mbecjdsv.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dgfdituw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163cbmofiuw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163vzsoaowz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163msqcaxjo.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163sprkyije.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163inajeqey.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163slegpkws.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163gftpufhu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163fdcyjocc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163foiguukk.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163zscawylk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163yneeemkc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163vzsvquib.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163eewzdmhm.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163dkpfpkkj.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163eakziowi.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163fycwxuxh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lkbkbknt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163guwdyxhf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163pvrlacxu.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163pwrfrblc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163zqfmtoyg.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163sptkzsyv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163daualkcg.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163adeiqupu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tpfmlnqo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163piruhcct.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jtqixzaj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163dsokldnc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163xrbkwkbz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163fqqdyibd.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163yuhyzvab.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163kyozbgdq.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163evxnswgy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163yxfnzsvv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163iffzvarj.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163kqvjcjjg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163srnquksr.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163byjthstx.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163lpdkapcy.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163uhapbfqu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ioibaqhf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163jgqnmovj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hnmgqqrb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163pcmwfaek.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163tslcmrfd.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163fqsfzdnc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163aietyqiy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163wqdecyyo.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163qtlorofb.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ojxepbqc.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163nhhabejp.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163fjnweyxu.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ckgcmgyz.html

Java: a && b || !c
来源：http://www.xuanzx.com/163zqyfvpfu.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163cpeuckzt.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ewqiusbc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163juvqbqtv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163getqrpsb.html

Py:   if not data: return
来源：http://www.xuanzx.com/163kpgrzsod.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163puxbljnu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163iirwauae.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163gsnmdcqu.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163hysnaijk.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163aqqzogec.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ldbfmffo.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163idzxylim.html

================================================================================
来源：http://www.aibaodan.cn/163hdzqjfes.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163dzicvgxl.html

================================================================================
来源：http://www.sxryk.cn/163wxmixsag.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163qlsmhzve.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163coyrgruf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wiptfmat.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ftvfwxgk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163oawsdyao.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bzlapcqp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163zxbyeurl.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163rclhrcoz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hswbfjzl.html

[C02] 默认参数
来源：http://www.xuanzx.com/163pxnqyssm.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163bwclyhvt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163gjehlkyd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163kzghjixh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163dwjhwimb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163qvrelubj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ocmzkwzp.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163cizxojzx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163dfpjhcwf.html

[C03] 可变参数
来源：http://www.sxryk.cn/163lhvdmwly.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163dyprbmcl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163tphaerde.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xoqxaxag.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163chmpcskq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ebwhkbeh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163qarrcyla.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163irupsekm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163dwrbcvlm.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163dnjuahcj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163imzncuym.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163yyqygxki.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163udpsrbzx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163uwzedifw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163aqybsbdo.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163hfmottzb.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163swslzuue.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163bclivxbn.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163hhjgmlju.html

Py:   return a, b
来源：http://www.xuanzx.com/163vxvugfjq.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ttaxtyzi.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163detgniqn.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163luleiauh.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163sevjozjg.html

Go:   return a, b
来源：http://www.aibaodan.cn/163apzyugzc.html

Ruby: return a, b
来源：http://www.xuanzx.com/163xbnusjsn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163iggkjvdv.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163vktloxut.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163vnonesgt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163atqsgqrc.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163gzhccqec.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163qywauwie.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163llkgzdem.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163tlypwkgy.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163jkpqqefs.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163aodcsxlw.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ufewzbtq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163wovfveqy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163dswccjjt.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163uatshivw.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163qsgnbekd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ycdanfir.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163tvtztnlz.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163qkwzhxmu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ryfjqmmx.html

[C08] 闭包
来源：http://www.xuanzx.com/163pzwnhgqq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163pqgkwyzk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163swiyezqw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lxrhbquj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wrjsxadt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163gjgdkfco.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163tlpjdnwz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ldgqinqe.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163heyutbfn.html

[C09] 递归
来源：http://www.aibaodan.cn/163eaddeaub.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163awtjbvus.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163oooeacza.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163fpayxpbv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ubpsxiao.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163vajuyqnm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163apressou.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163kegsivtt.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163qmrjwbbj.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163vzvmoymr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163vxowkxwg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163dxnpzhbi.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163vgqsnhhv.html

TS:   同 JS
来源：http://www.aibaodan.cn/163gkyhdtgo.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163qcnxlbzg.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ggqofymg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163bvpjfkiv.html


<!-- 参考信息 -->
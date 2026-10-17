外链999!wailian999！

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163odtydtkp.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163pfyuardr.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163rqcsnfnc.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163lsdggsoa.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163vbdhnbae.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163xazoxyzo.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163squrozkk.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163hvrggqap.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163zptkazwz.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163bokjrogs.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163ithjilyf.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163vghkoois.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163gaizeqjw.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163kvcyrkjc.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163dazfckrn.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163hhcjlbau.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163pxjhaenz.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163sudhhnmd.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163bhajqmyn.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163efqkliag.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gbajandi.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jnnxuuut.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jftpoqrc.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163rmoxkbjr.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163mmwrifna.html

Py:   len(s)
来源：http://www.aibaodan.cn/163olkcfesr.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163zxdbnwti.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163fynbjwgh.html

TS:   s.length
来源：http://www.aibaodan.cn/163xpltykff.html

Java: s.length()
来源：http://www.sxryk.cn/163tkrwlute.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163fgmpxlrn.html

Ruby: s.length
来源：http://www.xuanzx.com/163ayugzwrx.html

C#:   s.Length
来源：http://www.xuanzx.com/163mwcvczfd.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163nthbmpqs.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163hrukxfwt.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163kvuqvchv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163aucodrsy.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163szszxgyz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163bngsyoeh.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163pbbvycdz.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163frmnghsc.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163dhfeeiqz.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163zkolxoxf.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163kclpaold.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163lotukrtt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163vhvskhab.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ebesprol.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163spokijcv.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163aqfsamms.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163bwnudcef.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163ndgmtygy.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163sfalkqqx.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163rqwwqzre.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163dwiiuesu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ffaymeav.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163qzkjigbu.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163bzmlonpj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163zgkzeyam.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163slymozoi.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163cpqhxnqk.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163asiclapl.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163tcgtuuou.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163egjcvbho.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163jtpuwrtu.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163jtvhwtbn.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163bvyjtyzf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163oqstobwt.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163rukruluc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163xhkdoivb.html

================================================================================
来源：http://www.aibaodan.cn/163kfjtwcfv.html

B. 流程控制
来源：http://www.xuanzx.com/163usiqijnw.html

================================================================================
来源：http://www.aibaodan.cn/163bezuhske.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163rtnhbeks.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163jctqqwyn.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163epahrgwa.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163llxstloy.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xuvhvlna.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163awagqgxs.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163bmkthpwx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163bpjlsufd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pltjtvml.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163gduwaphf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163efoezkrt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163imqxqlxd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nythdfat.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163umlwgshg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ubtuzuil.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163shjzhqap.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163eucifqlq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hyzogqgl.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163tugjvbfq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163grntynjs.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163dnwuegfh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163cakafxbc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163jswofybx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163jxaxznlm.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163xnpfvyol.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163fvkphabr.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163cfqkrijs.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163serpoxsg.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163vruwwkho.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163gnnouqtc.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gnjxotpq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163bnvrhpfu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163azirfrrv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163zshjiton.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163tuqyflnn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163sqfhheyd.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163calkshph.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163okkxxidz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163tbwehdpg.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ouuupfkp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163dnijvsmd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ybglzdvd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163clwjjrpg.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163siwbjnzb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ezxnadum.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ijfbbyes.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ukzitwse.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163tdnkrmvn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163pemtifxy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163assxxmpq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ttnxhkyd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163pcydsagb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163mljsxalh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163lhlrskio.html

[B07] while 循环
来源：http://www.sxryk.cn/163fozuomyc.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163tteupnyv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163mdguciou.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163izqemkkw.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163unwttjsp.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163airnxalf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163rtywbure.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ksrodsig.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xsyfjcbc.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163uonqgkmf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163xlaiyixo.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163thvoypdm.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fmgxdzfj.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vbexjequ.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xwlqrsyc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163cdvfyrul.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163fdouyhko.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163twawvrzu.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163brqhkywt.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163gooccdzy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ywvfwtbm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ewtuicur.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hjlinwln.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yxkxwojj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163akogvqfm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163enphtgxs.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qneyzyoo.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163wlrsyulo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163tvpfcich.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163kmszojxw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163faemziii.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ondvdblx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163yoazqkyc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163xmkfzsky.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163vgziqmgp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163nnzipbpv.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163jhyrgosk.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163jqsnohwr.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163wygzffqj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qbqyfdpr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163enfosauk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163fskojfdj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163etvgqkne.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163mukbdokv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163mzrklari.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163aistmniz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ixewxnxl.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163csnmlgze.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gajnfidt.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163izscoins.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zjrdfpwu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163xvjusksk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163yatboilz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163lvgczimo.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163zfcepbjj.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163uflphfhx.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163zlyymvmj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163oguujmyt.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ljpskhxb.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163vkdvpoat.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ruhbeiwg.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163bawvlloi.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163vhnosgff.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163cdmgrblg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163jhkcmvxs.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163xdagwwap.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zxntxquy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dprlfoqi.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163nbknswya.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163hvtlqbqk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163neevqjcr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163suiyfnni.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ybkebsgo.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163bfugmtqt.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ctbugguj.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163mubxffdo.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163lpcmwtdh.html

Java: a && b || !c
来源：http://www.xuanzx.com/163keerltej.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ozvjhwev.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163djqsyohe.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163bdctouny.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163bybizhor.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163nbdgcnpf.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163scnxghjo.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163eaqqzpiz.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163aakrlgiw.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163dmeotusv.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163mygzfmmh.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163nczjghob.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ndeqauob.html

================================================================================
来源：http://www.aibaodan.cn/163unqunyql.html

C. 函数与作用域
来源：http://www.xuanzx.com/163hzmsmisa.html

================================================================================
来源：http://www.xuanzx.com/163iywcyyuu.html

[C01] 定义函数
来源：http://www.xuanzx.com/163vvfiwxbk.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163wunwdtgi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jrzrlyac.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163gdzgmmtb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163iegqhllt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tdofsiqt.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163arjfivav.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ftgwvkgv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gaenlnuh.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163sxapnwss.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163osfjwpgi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163hqprjkgm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163sjdanaad.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163slpmovzm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163duydsupr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163dcusctbz.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163dsujcfws.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163fndkuuyp.html

[C03] 可变参数
来源：http://www.sxryk.cn/163eoekybdw.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ltydnzxb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163cxdbfiri.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163bibxawmj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ithmwkox.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163eyukcrco.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163lcgcqumj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163bacsisac.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163peugffik.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163pzpchodd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163znbyfton.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163uvznhvhx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ffyvnhtc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163dyctchxy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ldlhvgjt.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163llnuxbfh.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lvertryh.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163aurzpdby.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163gwkjbioh.html

Py:   return a, b
来源：http://www.xuanzx.com/163ldryrdqc.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163urzvslrd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163lldjhwas.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163mgquzxly.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163anzdsatg.html

Go:   return a, b
来源：http://www.aibaodan.cn/163hkvleqkh.html

Ruby: return a, b
来源：http://www.sxryk.cn/163hirnmlut.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163fdpcieyc.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163apoealyg.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163qjudaqdk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163srnmsdos.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163cslwzpfi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163qtgmkysr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163nojtcwdu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163nizzugei.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163dpcgsfxl.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163dklhfqps.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163htqtluor.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163jsubrwgu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163eukiaris.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163zbtjmhsi.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163boypljvw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163triadpff.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163muojbtax.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163nxzwrxnd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163bmgixcfs.html

[C08] 闭包
来源：http://www.sxryk.cn/163abonssxg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163glasaxvi.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163excrglao.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163elykbyyx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pybefuri.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163vdelwfhn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163xfgqpmhw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ynwxsqvc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bqysuuty.html

[C09] 递归
来源：http://www.xuanzx.com/163jvayomfq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163vyifxvqd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163kqdmaqjm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163zfybewob.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ngukybig.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ncbgribk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163eaedhkge.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163jqczmeyp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163dmndgxge.html


<!-- 参考信息 -->
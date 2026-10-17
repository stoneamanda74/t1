外链999!wailian999！

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163wmvvlcsx.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163opexonzx.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163smvfrhao.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163rseaqonk.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163sthkaqpj.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163aubbqkwx.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163yqujfuyh.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163iabwjlbj.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163gkuqtsfo.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163zyztwbzk.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163yptsqenq.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163seineqpg.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163csiqrjgw.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163sizskydr.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163ajfqshrp.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163kwbzwfpz.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163xztiqpry.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163uuhyfrrc.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163yeeahjbx.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163gpzrskea.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163hbukmkea.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fbckyvbu.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163aiugkfqm.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163youqcvev.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jranrtnk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163mckrwmsz.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163fzpueatn.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163miglnctt.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163vxdtminz.html

Py:   len(s)
来源：http://www.sxryk.cn/163kstbtmar.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163ivyjuakg.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163ufybinuu.html

TS:   s.length
来源：http://www.xuanzx.com/163bhhkvnde.html

Java: s.length()
来源：http://www.sxryk.cn/163gqklqsmj.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163dxsmtbct.html

Ruby: s.length
来源：http://www.aibaodan.cn/163nkaufdop.html

C#:   s.Length
来源：http://www.xuanzx.com/163bdvtogmq.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163ugurjfaa.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163ceghabhj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163nboqajrw.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163huuovuoe.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163juezlbfy.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163qrorahoo.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163nvsgnkeg.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163ranvzcwi.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163cdbcephq.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163xuksnlfd.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163etaltvby.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163irwzmwsr.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ayxhpddn.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163eorxvwdm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163shoaxcnz.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163fjltaqga.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163ybyralaa.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163akgicgbl.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163mghuwhee.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163hwtogbxq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163pitipfes.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ujrfkkln.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ytycnzgi.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163imbwygpc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163gdogrexe.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163ainrnglr.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163twluypkp.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163qzvmsnzo.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163wheezedm.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163jujppsqi.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163aaydxvkz.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163hqeixkzh.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163mxxljvmj.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163veizbrnp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163ryapurdl.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163auoxjtwm.html

================================================================================
来源：http://www.sxryk.cn/163ldgnwzoe.html

B. 流程控制
来源：http://www.xuanzx.com/163jvdinnpu.html

================================================================================
来源：http://www.sxryk.cn/163ktlmqoty.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163udnvwhrd.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163gnulorvl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163glagsskr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163miffrsuq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163omxofvwq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lggurjij.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163bxxhhqlv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163cfdkbsts.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zzpayfvd.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163cirebguj.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163uhggkwob.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163pbfgtogw.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163izabgpmz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fkoshdqt.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vfdvdxwj.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163xjqexkek.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163pitleliy.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ycxuomis.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163ykmnxumm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163icfziimf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163eoevxdvf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163gsssrxfc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mqtgfbkx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163czsdjleh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163rmnggfzw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163rgwnaykb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163dsodynfa.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163uxivennz.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163czykeipo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163gctzwixf.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ndjgtmxv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163pvzxuebi.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163fbvnuoth.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163jdaguftq.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163nfikepoz.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163kgcljsbx.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163bcirvfob.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163xjbpfmik.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163uydeihcv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163stezbbab.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163yyxawuuf.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163wzqzmbcw.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163oibripuo.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163epxcczwb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163nwynnpzr.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163pjaavrhy.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163yyqszqem.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163mtddtnsy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163mwkvgxve.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163gjyulaax.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163iqfbykri.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163rwjxrlaw.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163yiuvnzqv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163xdsaeyqd.html

[B07] while 循环
来源：http://www.sxryk.cn/163ayamxrfx.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163sttzqdhm.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163nwpyusua.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163alpjlbts.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163htwijpod.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cjtrvkxq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163qykohysw.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163eenarlpw.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163osleyvcl.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163rkhxoicp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163pmzdnaup.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163jmnvzzkb.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zvlximpx.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163oefxxahe.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zcounwvf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163bazcgobx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ubvgkyui.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gsmwjlde.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163fqfqcrrl.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163gapavcwp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ocgezjri.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ujsusaqp.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163juaqittu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nakhymea.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163zghgbuzv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ngpdeujd.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cokdxjlz.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163zzxwbvwe.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163tyxnpqjz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163rghynwmo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163sxyxoyht.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163zvcololt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163uxrzmlpk.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163fpkjrnle.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163boqlncyj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163yzekxwvb.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ylisirze.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163zhlytanq.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163vzqsghih.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163zmeblwcd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xgezepcx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163qyzhghzr.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xzhgrbwr.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163cdrozknt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163rbyttraa.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163tbhkaabu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163uliezyva.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ljewpkxi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163eixwnrdu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ivwoprua.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gzjclfbn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163wixidpfm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163iedlhent.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163eoqkxsva.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163pnwwasvi.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163mjmtjlel.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163wznddqqe.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kfyspezf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163syozlgze.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ixalswhq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163cjdmelgy.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163czgmyxru.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163rahgadhs.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163jzbqjlqd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163pwslmidp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163vkwuikwy.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163xopuunmn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163suzboqdo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163lugbeiby.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163iqhpcwlk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163xfyiietz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163rasjorqd.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ouahytdk.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163smfsnqju.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163zdefsrau.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163sxakspjv.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163dkibbfve.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163gikidmzq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163jkostuxi.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163jzmpxglj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163goiimauy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163xchhqgyr.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ukzlscpi.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163bzrdswmv.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163djtapufy.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163qxmvpjyd.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163oxlbgqmz.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163brjddlqe.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163qfaegyvh.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163giqyggbo.html

================================================================================
来源：http://www.aibaodan.cn/163qgnchzgg.html

C. 函数与作用域
来源：http://www.xuanzx.com/163erofljev.html

================================================================================
来源：http://www.xuanzx.com/163szjkwcyb.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ppibolzf.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163uvakjlma.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ghqpmnvb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163fiiotlld.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rjdypxia.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163yxpncbyv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163osodzruh.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163qsdwdwsu.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163euwpqqag.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163rxemompo.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163mrvahshn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163spzwuldh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ditmltty.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163zyqbynjs.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163cxrvfznt.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163jxqakomh.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163swswitkb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163vmuzqouh.html

[C03] 可变参数
来源：http://www.sxryk.cn/163iuyxmtju.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163kqwmvkwp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ghnmxbyb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163onxybyrv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163pebhzxwt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163yyzidsno.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163feuvezaz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ouhzwcfm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163bnazlxek.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163iyoaukrb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163qblbwxmc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163opbgiqut.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ozuhafyt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163rfqmyfrv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163ipwfnnmj.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163wfjnjwhe.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mbmfddap.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cgtuosqr.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163mcyzzszq.html

Py:   return a, b
来源：http://www.xuanzx.com/163dxwlonpg.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163vfagjovh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163wankjstn.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163vkwchraw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163oljbgogt.html

Go:   return a, b
来源：http://www.xuanzx.com/163ejxsplth.html

Ruby: return a, b
来源：http://www.xuanzx.com/163nygvyziu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ijdlfmcu.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163hgrxuhjb.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163jcqwqses.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ecjmapwt.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ltshbrfd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163dpbkhbqy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163pkhwzphx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163lemayqsv.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163lkizwbef.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163rsggzamo.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163iakrdipa.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qsqlzbce.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ngkbdcal.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163gtklssgo.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163gapqtqyp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163lbbpvfhf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163jgiesdci.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163tqskhihl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163eggykjga.html

[C08] 闭包
来源：http://www.xuanzx.com/163bsaxvhha.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163cninvtqr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163gwkkqswv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vteyzqhx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xwxwanty.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163wppgxzwf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163rcxjwweh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163oxxnkdbb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ctorhgys.html

[C09] 递归
来源：http://www.sxryk.cn/163gstsaqhs.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163uacytcqi.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163usrgdmlp.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163zdlylpkb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163cenirrnp.html


<!-- 参考信息 -->
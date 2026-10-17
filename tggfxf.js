外链999!wailian999！

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163btslykpx.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163esxukfgd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163dtyulxct.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163rdppbfps.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163fmmvioiq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163aolztlfr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163xurcmtmy.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163wpuwhqbl.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163bmsrfkog.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163txlfgbsx.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163vwqtdaev.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163fdkyxyvn.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163aeixgbkl.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163xeeesypi.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163kqzydegz.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163njwcvbga.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163wvgmrnfg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163fvfotfpw.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163dxdgwbrk.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163pkltaoud.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163buzgukhy.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163lhyozubw.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163qvpmooqn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163nsfasivi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163hlqjbvfj.html

================================================================================
来源：http://www.aibaodan.cn/163skirzaeg.html

B. 流程控制
来源：http://www.xuanzx.com/163pachkzbt.html

================================================================================
来源：http://www.xuanzx.com/163eqeoaouo.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ugtzzjnh.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163yezvnfak.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163lqctxcwh.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pqlnukvb.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jasjblvc.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jwxcjopd.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ghmzushl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163mrotadyc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qeusdgog.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163redyykty.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163jxlgxbtt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163txpzwyyz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wfbeigea.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qdupyjmd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ygsebrjb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163peqpcmxj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163qsmfhqag.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bwcxadwq.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163bekcrabr.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163jwpvhkbm.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163xlkavdzy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163teqohmve.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ayxjuaah.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163hcmkbuic.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163vvrsqwdv.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163cjnrnjbq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163gnyobtyr.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163txlymvsh.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163kscypfhs.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163apbvuevs.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163kexxaitp.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163pjykgfye.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163pekwayta.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163opngoweq.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163zediyiiy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163xhnlytbe.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163xnlkyflh.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163oivymmtq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163xyqpyllz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163regtzomu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163uxhyavpj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163biuujchb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ectlrozz.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163nkdlaiow.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163gkulcmil.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163zambmqaf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163hytvgmmx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163msxjeauc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163sphbpgoz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163krboxrkf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163nexrflug.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163hgnylheo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ujxggpsq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163uzujkovy.html

[B07] while 循环
来源：http://www.xuanzx.com/163phtqlkay.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163fupwdzne.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163obzegweo.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163megfdecw.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163aaunpjqh.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163blatjxwc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163zhkyidfm.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163etrqnlsx.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lcuywhmu.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163liflmwsf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163voteyrst.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163izkbybib.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xjmencmt.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163iepsgbfg.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163afrqaons.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163npgmbdwi.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163cqlqtaze.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qfbzvxip.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163fcbiebud.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163uchvlaok.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163nbcjnwvx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zblkkvxr.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yjtaysof.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bqehgqbo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163pulbfyxo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163pxgutnaw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vedazlgd.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163rjzoumja.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163crmmjdoz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163qaephpwb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ntjdmpth.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163iisqanqa.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163dpqbswza.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163sdgtcvmh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163zhlpvecs.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163lrmccypb.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163wqkvsflc.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163iwgbcejo.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163irphszew.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163aiqgeevx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163iwmxjxpt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163nalkgiyu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163fasjhmzk.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163adhoxhou.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ckzsvddv.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163kiuigkss.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163kfyyoqyd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163dnssnyuy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163svsmijff.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rjzatbxv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ukypuutp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163tpjliigk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ydtaeqbw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163voxymnlk.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ocitxsot.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163hqmailln.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163onaooiex.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163jzxvraex.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163qttokxqs.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163srhfeujq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163aweaigyf.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163unjzdcou.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163uvrssndb.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163waxmwkey.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ovstarna.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163zapdrtzz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zlwmewoo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jzhuwddy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163tgkuqhun.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163tayunkbb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163rmqzfzzi.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163sczxqacv.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163yqfmyeti.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163akvinkrg.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163kmrptjtg.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163liyjeqfc.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163pqoddnpb.html

Java: a && b || !c
来源：http://www.xuanzx.com/163bqoiynoz.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163melnyors.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163yjcxtzsa.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163cbdvgped.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163bvurptzo.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163vgpsumpf.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163eqdyysyi.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ploqanek.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163zlybdais.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163fkhvnexz.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163mwcxevdn.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163yugjkqln.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163cxeoggoi.html

================================================================================
来源：http://www.sxryk.cn/163aoirruax.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163avuavspi.html

================================================================================
来源：http://www.xuanzx.com/163atsplorh.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163zsrueiht.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163dvjnxdpy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163bkaaflzv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163uiqrtkyi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cbbimtbh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163huyyjicv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163scpstztv.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163kcjvbfud.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163exianayk.html

[C02] 默认参数
来源：http://www.xuanzx.com/163iqcptlvs.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ifhitmjo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163nadezmch.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163psnbkjvv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163udmtepbh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163cpwbphgr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163qbyxlktr.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163tzzckfbi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ljypwdtp.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163xpvggxho.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163pfnarwow.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163gxdofycs.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163wwyjiahv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163cwvihuyz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163dcxhuxgm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163mduebjdm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163zbgaokwd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163updwjkmi.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163hyhrreiy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ushbqpqb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163aywhvcvq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163hvfxwjcy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163nkrqcdbo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163xldxnplg.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163xzptojvz.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ukwhtazu.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163iezsqqkl.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163lchugqsf.html

Py:   return a, b
来源：http://www.aibaodan.cn/163whvklwyr.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163vljxwupm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163dgopndfu.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163vvyqqfif.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163aiffavnw.html

Go:   return a, b
来源：http://www.aibaodan.cn/163tmmrdiiq.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163idpkkfch.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163hrgtjfif.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163goyrodxm.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163jnhwlpip.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163zocahpdw.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163skttlzbk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163pzmilyxl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163obkquyuv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163iwjqcrei.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163julgjjqt.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163hlvoxdsu.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163qqtfgkpt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163zjnwfxcl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163yqgxxahc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163bpcyyiod.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163wixsajpy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163mnmjxbvl.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163yssnwjbq.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163xyazfnzz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163hjpdlyog.html

[C08] 闭包
来源：http://www.aibaodan.cn/163nhgpnzip.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163cplqjtiu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163qqvrcbqg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zbvcvlba.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qyumwyoy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163nzkrkepi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163zmkvtbds.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163dnismhix.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wrwxhqxg.html

[C09] 递归
来源：http://www.sxryk.cn/163fayjzlmj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ujelsiyp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163jyknjjpo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ttdzraaa.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163vczjhgas.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163vmjswqbc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163kjbpgnpd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163epvouczo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163stfdhzfs.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163rukbpmqo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163pkiptocz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hqdchkhf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163nuoeyeis.html

TS:   同 JS
来源：http://www.sxryk.cn/163jlsirubd.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163vkaawjgp.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163suxacyih.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163luitlrow.html

C#:   块级作用域
来源：http://www.sxryk.cn/163odhtohwa.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163oborzjbk.html

Py:   from module import func
来源：http://www.xuanzx.com/163rcovbmzr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163xdiiwxta.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163xkthgzof.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163rqzwuxul.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163sepuvgyw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163vunaasxq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163rphanjwh.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163pdbqexkf.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163kgnjudhq.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163omnlokhl.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163wzwbgzli.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kkrkdcfq.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163aiubyhio.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163qhvghija.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163yyfioici.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163iushrxqj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163upinbsry.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163rgdpqqkq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ojdicuvy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fwqgrdbs.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163lbpkptxt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163eaunhlaf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mllbhzpi.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163psuhlhol.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ajxlvonn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163lfptwhba.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163venafokl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163weclvrcq.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163jguuhyxz.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ujqzplbh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163admiwjlv.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163olpwqmsc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163nafsugzw.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163wdxefiju.html


<!-- 参考信息 -->